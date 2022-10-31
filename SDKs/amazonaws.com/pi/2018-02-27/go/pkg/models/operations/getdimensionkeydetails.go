package operations

import (
	"openapi/pkg/models/shared"
)

type GetDimensionKeyDetailsXAmzTargetEnum string

const (
	GetDimensionKeyDetailsXAmzTargetEnumPerformanceInsightsv20180227GetDimensionKeyDetails GetDimensionKeyDetailsXAmzTargetEnum = "PerformanceInsightsv20180227.GetDimensionKeyDetails"
)

type GetDimensionKeyDetailsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDimensionKeyDetailsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDimensionKeyDetailsRequest struct {
	Headers GetDimensionKeyDetailsHeaders
	Request shared.GetDimensionKeyDetailsRequest `request:"mediaType=application/json"`
}

type GetDimensionKeyDetailsResponse struct {
	ContentType                    string
	GetDimensionKeyDetailsResponse *shared.GetDimensionKeyDetailsResponse
	InternalServiceError           *interface{}
	InvalidArgumentException       *interface{}
	NotAuthorizedException         *interface{}
	StatusCode                     int64
}
