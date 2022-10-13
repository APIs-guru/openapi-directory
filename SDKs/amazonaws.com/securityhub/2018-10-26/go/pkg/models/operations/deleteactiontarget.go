package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteActionTargetPathParams struct {
	ActionTargetArn string `pathParam:"style=simple,explode=false,name=ActionTargetArn"`
}

type DeleteActionTargetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteActionTargetRequest struct {
	PathParams DeleteActionTargetPathParams
	Headers    DeleteActionTargetHeaders
}

type DeleteActionTargetResponse struct {
	ContentType                string
	DeleteActionTargetResponse *shared.DeleteActionTargetResponse
	InternalException          *interface{}
	InvalidAccessException     *interface{}
	InvalidInputException      *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
