package operations

import (
	"openapi/pkg/models/shared"
)

type ListLongTermPricingXAmzTargetEnum string

const (
	ListLongTermPricingXAmzTargetEnumAwsieSnowballJobManagementServiceListLongTermPricing ListLongTermPricingXAmzTargetEnum = "AWSIESnowballJobManagementService.ListLongTermPricing"
)

type ListLongTermPricingHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLongTermPricingXAmzTargetEnum `header:"name=X-Amz-Target"`
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
