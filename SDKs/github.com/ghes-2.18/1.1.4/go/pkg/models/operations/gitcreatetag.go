package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GitCreateTagPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

// GitCreateTagRequestBodyTagger
// An object with information about the individual creating the tag.
type GitCreateTagRequestBodyTagger struct {
	Date  *time.Time `json:"date,omitempty"`
	Email string     `json:"email"`
	Name  string     `json:"name"`
}

type GitCreateTagRequestBodyTypeEnum string

const (
	GitCreateTagRequestBodyTypeEnumCommit GitCreateTagRequestBodyTypeEnum = "commit"
	GitCreateTagRequestBodyTypeEnumTree   GitCreateTagRequestBodyTypeEnum = "tree"
	GitCreateTagRequestBodyTypeEnumBlob   GitCreateTagRequestBodyTypeEnum = "blob"
)

type GitCreateTagRequestBody struct {
	Message string                          `json:"message"`
	Object  string                          `json:"object"`
	Tag     string                          `json:"tag"`
	Tagger  *GitCreateTagRequestBodyTagger  `json:"tagger,omitempty"`
	Type    GitCreateTagRequestBodyTypeEnum `json:"type"`
}

type GitCreateTagRequest struct {
	PathParams GitCreateTagPathParams
	Request    *GitCreateTagRequestBody `request:"mediaType=application/json"`
}

type GitCreateTagResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	GitTag          *shared.GitTag
	ValidationError *shared.ValidationError
}
