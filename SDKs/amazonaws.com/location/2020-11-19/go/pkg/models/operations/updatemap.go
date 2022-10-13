package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMapPathParams struct {
	MapName string `pathParam:"style=simple,explode=false,name=MapName"`
}

type UpdateMapHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateMapRequestBodyPricingPlanEnum string

const (
	UpdateMapRequestBodyPricingPlanEnumRequestBasedUsage     UpdateMapRequestBodyPricingPlanEnum = "RequestBasedUsage"
	UpdateMapRequestBodyPricingPlanEnumMobileAssetTracking   UpdateMapRequestBodyPricingPlanEnum = "MobileAssetTracking"
	UpdateMapRequestBodyPricingPlanEnumMobileAssetManagement UpdateMapRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type UpdateMapRequestBody struct {
	Description *string                              `json:"Description"`
	PricingPlan *UpdateMapRequestBodyPricingPlanEnum `json:"PricingPlan"`
}

type UpdateMapRequest struct {
	PathParams UpdateMapPathParams
	Headers    UpdateMapHeaders
	Request    UpdateMapRequestBody `request:"mediaType=application/json"`
}

type UpdateMapResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateMapResponse         *shared.UpdateMapResponse
	ValidationException       *interface{}
}
