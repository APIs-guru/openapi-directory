package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLongTermPricingXAmzTargetEnum string

const (
	UpdateLongTermPricingXAmzTargetEnumAwsieSnowballJobManagementServiceUpdateLongTermPricing UpdateLongTermPricingXAmzTargetEnum = "AWSIESnowballJobManagementService.UpdateLongTermPricing"
)

type UpdateLongTermPricingHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLongTermPricingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateLongTermPricingRequest struct {
	Headers UpdateLongTermPricingHeaders
	Request shared.UpdateLongTermPricingRequest `request:"mediaType=application/json"`
}

type UpdateLongTermPricingResponse struct {
	ContentType                 string
	InvalidResourceException    *interface{}
	StatusCode                  int64
	UpdateLongTermPricingResult map[string]interface{}
}
