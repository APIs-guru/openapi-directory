package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSolutionXAmzTargetEnum string

const (
	DeleteSolutionXAmzTargetEnumAmazonPersonalizeDeleteSolution DeleteSolutionXAmzTargetEnum = "AmazonPersonalize.DeleteSolution"
)

type DeleteSolutionHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSolutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteSolutionRequest struct {
	Headers DeleteSolutionHeaders
	Request shared.DeleteSolutionRequest `request:"mediaType=application/json"`
}

type DeleteSolutionResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
