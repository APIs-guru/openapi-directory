package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRouteCalculatorPathParams struct {
	CalculatorName string `pathParam:"style=simple,explode=false,name=CalculatorName"`
}

type UpdateRouteCalculatorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateRouteCalculatorRequestBodyPricingPlanEnum string

const (
	UpdateRouteCalculatorRequestBodyPricingPlanEnumRequestBasedUsage     UpdateRouteCalculatorRequestBodyPricingPlanEnum = "RequestBasedUsage"
	UpdateRouteCalculatorRequestBodyPricingPlanEnumMobileAssetTracking   UpdateRouteCalculatorRequestBodyPricingPlanEnum = "MobileAssetTracking"
	UpdateRouteCalculatorRequestBodyPricingPlanEnumMobileAssetManagement UpdateRouteCalculatorRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type UpdateRouteCalculatorRequestBody struct {
	Description *string                                          `json:"Description"`
	PricingPlan *UpdateRouteCalculatorRequestBodyPricingPlanEnum `json:"PricingPlan"`
}

type UpdateRouteCalculatorRequest struct {
	PathParams UpdateRouteCalculatorPathParams
	Headers    UpdateRouteCalculatorHeaders
	Request    UpdateRouteCalculatorRequestBody `request:"mediaType=application/json"`
}

type UpdateRouteCalculatorResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateRouteCalculatorResponse *shared.UpdateRouteCalculatorResponse
	ValidationException           *interface{}
}
