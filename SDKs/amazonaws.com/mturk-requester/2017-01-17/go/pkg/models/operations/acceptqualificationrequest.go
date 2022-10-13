package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptQualificationRequestXAmzTargetEnum string

const (
	AcceptQualificationRequestXAmzTargetEnumMTurkRequesterServiceV20170117AcceptQualificationRequest AcceptQualificationRequestXAmzTargetEnum = "MTurkRequesterServiceV20170117.AcceptQualificationRequest"
)

type AcceptQualificationRequestHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AcceptQualificationRequestXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AcceptQualificationRequestRequest struct {
	Headers AcceptQualificationRequestHeaders
	Request shared.AcceptQualificationRequestRequest `request:"mediaType=application/json"`
}

type AcceptQualificationRequestResponse struct {
	AcceptQualificationRequestResponse map[string]interface{}
	ContentType                        string
	RequestError                       *interface{}
	ServiceFault                       *interface{}
	StatusCode                         int64
}
