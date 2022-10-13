package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDedicatedIPPoolHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDedicatedIPPoolRequestBody struct {
	PoolName string       `json:"PoolName"`
	Tags     []shared.Tag `json:"Tags"`
}

type CreateDedicatedIPPoolRequest struct {
	Headers CreateDedicatedIPPoolHeaders
	Request CreateDedicatedIPPoolRequestBody `request:"mediaType=application/json"`
}

type CreateDedicatedIPPoolResponse struct {
	AlreadyExistsException          *interface{}
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateDedicatedIPPoolResponse   map[string]interface{}
	LimitExceededException          *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
