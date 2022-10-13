package operations

import (
	"openapi/pkg/models/shared"
)

type PostBlockedNumbersSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostBlockedNumbersRequest struct {
	Request  []string `request:"mediaType=application/json"`
	Security PostBlockedNumbersSecurity
}

type PostBlockedNumbersResponse struct {
	ContentType string
	StatusCode  int64
}
