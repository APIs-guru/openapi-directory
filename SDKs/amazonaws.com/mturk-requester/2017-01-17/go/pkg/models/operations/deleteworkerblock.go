package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkerBlockXAmzTargetEnum string

const (
	DeleteWorkerBlockXAmzTargetEnumMTurkRequesterServiceV20170117DeleteWorkerBlock DeleteWorkerBlockXAmzTargetEnum = "MTurkRequesterServiceV20170117.DeleteWorkerBlock"
)

type DeleteWorkerBlockHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteWorkerBlockXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteWorkerBlockRequest struct {
	Headers DeleteWorkerBlockHeaders
	Request shared.DeleteWorkerBlockRequest `request:"mediaType=application/json"`
}

type DeleteWorkerBlockResponse struct {
	ContentType               string
	DeleteWorkerBlockResponse map[string]interface{}
	RequestError              *interface{}
	ServiceFault              *interface{}
	StatusCode                int64
}
