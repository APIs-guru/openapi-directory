package operations

import (
	"openapi/pkg/models/shared"
)

type PostRmmPreSignAttachmentSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostRmmPreSignAttachmentRequest struct {
	Request  shared.PreSignRequest `request:"mediaType=application/json"`
	Security PostRmmPreSignAttachmentSecurity
}

type PostRmmPreSignAttachmentResponse struct {
	ContentType string
	PreSignInfo *shared.PreSignInfo
	StatusCode  int64
}
