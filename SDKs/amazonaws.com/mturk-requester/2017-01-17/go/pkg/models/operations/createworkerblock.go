package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkerBlockXAmzTargetEnum string

const (
	CreateWorkerBlockXAmzTargetEnumMTurkRequesterServiceV20170117CreateWorkerBlock CreateWorkerBlockXAmzTargetEnum = "MTurkRequesterServiceV20170117.CreateWorkerBlock"
)

type CreateWorkerBlockHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWorkerBlockXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
