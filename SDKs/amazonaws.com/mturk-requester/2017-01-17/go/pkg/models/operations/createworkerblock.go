package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkerBlockXAmzTargetEnum string

const (
	CreateWorkerBlockXAmzTargetEnumMTurkRequesterServiceV20170117CreateWorkerBlock CreateWorkerBlockXAmzTargetEnum = "MTurkRequesterServiceV20170117.CreateWorkerBlock"
)

type CreateWorkerBlockHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWorkerBlockXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateWorkerBlockRequest struct {
	Headers CreateWorkerBlockHeaders
	Request shared.CreateWorkerBlockRequest `request:"mediaType=application/json"`
}

type CreateWorkerBlockResponse struct {
	ContentType               string
	CreateWorkerBlockResponse map[string]interface{}
	RequestError              *interface{}
	ServiceFault              *interface{}
	StatusCode                int64
}
