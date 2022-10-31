package operations

import (
	"openapi/pkg/models/shared"
)

type RejectQualificationRequestXAmzTargetEnum string

const (
	RejectQualificationRequestXAmzTargetEnumMTurkRequesterServiceV20170117RejectQualificationRequest RejectQualificationRequestXAmzTargetEnum = "MTurkRequesterServiceV20170117.RejectQualificationRequest"
)

type RejectQualificationRequestHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RejectQualificationRequestXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RejectQualificationRequestRequest struct {
	Headers RejectQualificationRequestHeaders
	Request shared.RejectQualificationRequestRequest `request:"mediaType=application/json"`
}

type RejectQualificationRequestResponse struct {
	ContentType                        string
	RejectQualificationRequestResponse map[string]interface{}
	RequestError                       *interface{}
	ServiceFault                       *interface{}
	StatusCode                         int64
}
