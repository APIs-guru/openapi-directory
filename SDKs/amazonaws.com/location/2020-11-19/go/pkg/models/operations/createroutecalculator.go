package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRouteCalculatorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateRouteCalculatorRequestBodyPricingPlanEnum string

const (
	CreateRouteCalculatorRequestBodyPricingPlanEnumRequestBasedUsage     CreateRouteCalculatorRequestBodyPricingPlanEnum = "RequestBasedUsage"
	CreateRouteCalculatorRequestBodyPricingPlanEnumMobileAssetTracking   CreateRouteCalculatorRequestBodyPricingPlanEnum = "MobileAssetTracking"
	CreateRouteCalculatorRequestBodyPricingPlanEnumMobileAssetManagement CreateRouteCalculatorRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type CreateRouteCalculatorRequestBody struct {
	CalculatorName string                                          `json:"CalculatorName"`
	DataSource     string                                          `json:"DataSource"`
	Description    *string                                         `json:"Description"`
	PricingPlan    CreateRouteCalculatorRequestBodyPricingPlanEnum `json:"PricingPlan"`
	Tags           map[string]string                               `json:"Tags"`
}

type CreateRouteCalculatorRequest struct {
	Headers CreateRouteCalculatorHeaders
	Request CreateRouteCalculatorRequestBody `request:"mediaType=application/json"`
}

type CreateRouteCalculatorResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateRouteCalculatorResponse *shared.CreateRouteCalculatorResponse
	InternalServerException       *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
