package operations

import (
	"openapi/pkg/models/shared"
)

type RejectQualificationRequestXAmzTargetEnum string

const (
	RejectQualificationRequestXAmzTargetEnumMTurkRequesterServiceV20170117RejectQualificationRequest RejectQualificationRequestXAmzTargetEnum = "MTurkRequesterServiceV20170117.RejectQualificationRequest"
)

type RejectQualificationRequestHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RejectQualificationRequestXAmzTargetEnum `header:"name=X-Amz-Target"`
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
