package operations

import (
	"openapi/pkg/models/shared"
)

type GetPresignURLSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type GetPresignURLUploadPresignFields struct {
	Key            string `json:"key"`
	Policy         string `json:"policy"`
	XAmzAlgorithm  string `json:"x-amz-algorithm"`
	XAmzCredential string `json:"x-amz-credential"`
	XAmzDate       string `json:"x-amz-date"`
	XAmzSignature  string `json:"x-amz-signature"`
}

type GetPresignURLUploadPresignMethodEnum string

const (
	GetPresignURLUploadPresignMethodEnumPost GetPresignURLUploadPresignMethodEnum = "post"
)

type GetPresignURLUploadPresign struct {
	Fields  GetPresignURLUploadPresignFields      `json:"fields"`
	Headers map[string]interface{}                `json:"headers"`
	Method  *GetPresignURLUploadPresignMethodEnum `json:"method,omitempty"`
	URL     string                                `json:"url"`
}

type GetPresignURLRequest struct {
	Security GetPresignURLSecurity
}

type GetPresignURLResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	UploadPresign       *GetPresignURLUploadPresign
}
