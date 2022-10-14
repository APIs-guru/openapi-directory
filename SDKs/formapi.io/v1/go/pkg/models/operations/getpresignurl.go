package operations

import (
	"openapi/pkg/models/shared"
)

type GetPresignURLSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type GetPresignURLRequest struct {
	Security GetPresignURLSecurity
}

type GetPresignURL200ApplicationJSONFields struct {
	Key            string `json:"key"`
	Policy         string `json:"policy"`
	XAmzAlgorithm  string `json:"x-amz-algorithm"`
	XAmzCredential string `json:"x-amz-credential"`
	XAmzDate       string `json:"x-amz-date"`
	XAmzSignature  string `json:"x-amz-signature"`
}

type GetPresignURL200ApplicationJSONMethodEnum string

const (
	GetPresignURL200ApplicationJSONMethodEnumPost GetPresignURL200ApplicationJSONMethodEnum = "post"
)

type GetPresignURL200ApplicationJSONUploadPresign struct {
	Fields  GetPresignURL200ApplicationJSONFields      `json:"fields"`
	Headers map[string]interface{}                     `json:"headers"`
	Method  *GetPresignURL200ApplicationJSONMethodEnum `json:"method,omitempty"`
	URL     string                                     `json:"url"`
}

type GetPresignURLResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	UploadPresign       *GetPresignURL200ApplicationJSONUploadPresign
}
