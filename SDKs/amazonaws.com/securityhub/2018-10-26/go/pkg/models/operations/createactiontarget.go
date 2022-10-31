package operations

import (
	"openapi/pkg/models/shared"
)

type CreateActionTargetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateActionTargetRequestBody struct {
	Description string `json:"Description"`
	ID          string `json:"Id"`
	Name        string `json:"Name"`
}

type CreateActionTargetRequest struct {
	Headers CreateActionTargetHeaders
	Request CreateActionTargetRequestBody `request:"mediaType=application/json"`
}

type CreateActionTargetResponse struct {
	ContentType                string
	CreateActionTargetResponse *shared.CreateActionTargetResponse
	InternalException          *interface{}
	InvalidAccessException     *interface{}
	InvalidInputException      *interface{}
	LimitExceededException     *interface{}
	ResourceConflictException  *interface{}
	StatusCode                 int64
}
