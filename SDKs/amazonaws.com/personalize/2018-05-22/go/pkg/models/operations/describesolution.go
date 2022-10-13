package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSolutionXAmzTargetEnum string

const (
	DescribeSolutionXAmzTargetEnumAmazonPersonalizeDescribeSolution DescribeSolutionXAmzTargetEnum = "AmazonPersonalize.DescribeSolution"
)

type DescribeSolutionHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSolutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeSolutionRequest struct {
	Headers DescribeSolutionHeaders
	Request shared.DescribeSolutionRequest `request:"mediaType=application/json"`
}

type DescribeSolutionResponse struct {
	ContentType               string
	DescribeSolutionResponse  *shared.DescribeSolutionResponse
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
