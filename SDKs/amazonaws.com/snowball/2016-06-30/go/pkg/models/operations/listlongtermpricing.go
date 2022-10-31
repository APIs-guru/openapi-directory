package operations

import (
	"openapi/pkg/models/shared"
)

type ListLongTermPricingXAmzTargetEnum string

const (
	ListLongTermPricingXAmzTargetEnumAwsieSnowballJobManagementServiceListLongTermPricing ListLongTermPricingXAmzTargetEnum = "AWSIESnowballJobManagementService.ListLongTermPricing"
)

type ListLongTermPricingHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLongTermPricingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListLongTermPricingRequest struct {
	Headers ListLongTermPricingHeaders
	Request shared.ListLongTermPricingRequest `request:"mediaType=application/json"`
}

type ListLongTermPricingResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	InvalidResourceException  *interface{}
	ListLongTermPricingResult *shared.ListLongTermPricingResult
	StatusCode                int64
}
