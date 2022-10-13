package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePlaceIndexPathParams struct {
	IndexName string `pathParam:"style=simple,explode=false,name=IndexName"`
}

type UpdatePlaceIndexHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdatePlaceIndexRequestBodyDataSourceConfiguration struct {
	IntendedUse *shared.IntendedUseEnum `json:"IntendedUse"`
}

type UpdatePlaceIndexRequestBodyPricingPlanEnum string

const (
	UpdatePlaceIndexRequestBodyPricingPlanEnumRequestBasedUsage     UpdatePlaceIndexRequestBodyPricingPlanEnum = "RequestBasedUsage"
	UpdatePlaceIndexRequestBodyPricingPlanEnumMobileAssetTracking   UpdatePlaceIndexRequestBodyPricingPlanEnum = "MobileAssetTracking"
	UpdatePlaceIndexRequestBodyPricingPlanEnumMobileAssetManagement UpdatePlaceIndexRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type UpdatePlaceIndexRequestBody struct {
	DataSourceConfiguration *UpdatePlaceIndexRequestBodyDataSourceConfiguration `json:"DataSourceConfiguration"`
	Description             *string                                             `json:"Description"`
	PricingPlan             *UpdatePlaceIndexRequestBodyPricingPlanEnum         `json:"PricingPlan"`
}

type UpdatePlaceIndexRequest struct {
	PathParams UpdatePlaceIndexPathParams
	Headers    UpdatePlaceIndexHeaders
	Request    UpdatePlaceIndexRequestBody `request:"mediaType=application/json"`
}

type UpdatePlaceIndexResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdatePlaceIndexResponse  *shared.UpdatePlaceIndexResponse
	ValidationException       *interface{}
}
