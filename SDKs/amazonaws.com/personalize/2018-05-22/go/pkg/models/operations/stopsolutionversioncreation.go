package operations

import (
	"openapi/pkg/models/shared"
)

type StopSolutionVersionCreationXAmzTargetEnum string

const (
	StopSolutionVersionCreationXAmzTargetEnumAmazonPersonalizeStopSolutionVersionCreation StopSolutionVersionCreationXAmzTargetEnum = "AmazonPersonalize.StopSolutionVersionCreation"
)

type StopSolutionVersionCreationHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopSolutionVersionCreationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopSolutionVersionCreationRequest struct {
	Headers StopSolutionVersionCreationHeaders
	Request shared.StopSolutionVersionCreationRequest `request:"mediaType=application/json"`
}

type StopSolutionVersionCreationResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
