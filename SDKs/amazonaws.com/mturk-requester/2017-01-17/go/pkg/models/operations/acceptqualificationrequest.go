package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptQualificationRequestXAmzTargetEnum string

const (
	AcceptQualificationRequestXAmzTargetEnumMTurkRequesterServiceV20170117AcceptQualificationRequest AcceptQualificationRequestXAmzTargetEnum = "MTurkRequesterServiceV20170117.AcceptQualificationRequest"
)

type AcceptQualificationRequestHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AcceptQualificationRequestXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
