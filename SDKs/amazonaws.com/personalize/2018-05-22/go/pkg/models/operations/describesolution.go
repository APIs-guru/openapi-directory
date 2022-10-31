package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSolutionXAmzTargetEnum string

const (
	DescribeSolutionXAmzTargetEnumAmazonPersonalizeDescribeSolution DescribeSolutionXAmzTargetEnum = "AmazonPersonalize.DescribeSolution"
)

type DescribeSolutionHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSolutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
