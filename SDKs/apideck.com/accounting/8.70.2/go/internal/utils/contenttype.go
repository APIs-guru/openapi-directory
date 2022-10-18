package utils

import (
	"fmt"
	"mime"
	"strings"
)

func MatchContentType(contentType string, pattern string) bool {
	if contentType == pattern || pattern == "*" || pattern == "*/*" {
		return true
	}

	mediaType, _, err := mime.ParseMediaType(contentType)
	if err != nil {
		return false
	}

	if mediaType == pattern {
		return true
	}

	parts := strings.Split(mediaType, "/")
	if len(parts) == 2 {
		if fmt.Sprintf("%s/*", parts[0]) == pattern || fmt.Sprintf("*/%s", parts[1]) == pattern {
			return true
		}
	}

	return false
}
