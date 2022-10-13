package operations

import (
	"openapi/pkg/models/shared"
)

type NotifyWorkersXAmzTargetEnum string

const (
	NotifyWorkersXAmzTargetEnumMTurkRequesterServiceV20170117NotifyWorkers NotifyWorkersXAmzTargetEnum = "MTurkRequesterServiceV20170117.NotifyWorkers"
)

type NotifyWorkersHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        NotifyWorkersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type NotifyWorkersRequest struct {
	Headers NotifyWorkersHeaders
	Request shared.NotifyWorkersRequest `request:"mediaType=application/json"`
}

type NotifyWorkersResponse struct {
	ContentType           string
	NotifyWorkersResponse *shared.NotifyWorkersResponse
	RequestError          *interface{}
	ServiceFault          *interface{}
	StatusCode            int64
}
