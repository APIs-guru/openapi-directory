package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLongTermPricingXAmzTargetEnum string

const (
	CreateLongTermPricingXAmzTargetEnumAwsieSnowballJobManagementServiceCreateLongTermPricing CreateLongTermPricingXAmzTargetEnum = "AWSIESnowballJobManagementService.CreateLongTermPricing"
)

type CreateLongTermPricingHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLongTermPricingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateLongTermPricingRequest struct {
	Headers CreateLongTermPricingHeaders
	Request shared.CreateLongTermPricingRequest `request:"mediaType=application/json"`
}

type CreateLongTermPricingResponse struct {
	ContentType                 string
	CreateLongTermPricingResult *shared.CreateLongTermPricingResult
	InvalidResourceException    *interface{}
	StatusCode                  int64
}
