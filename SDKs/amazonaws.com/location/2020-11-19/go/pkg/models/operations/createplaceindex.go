package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePlaceIndexHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreatePlaceIndexRequestBodyDataSourceConfiguration struct {
	IntendedUse *shared.IntendedUseEnum `json:"IntendedUse"`
}

type CreatePlaceIndexRequestBodyPricingPlanEnum string

const (
	CreatePlaceIndexRequestBodyPricingPlanEnumRequestBasedUsage     CreatePlaceIndexRequestBodyPricingPlanEnum = "RequestBasedUsage"
	CreatePlaceIndexRequestBodyPricingPlanEnumMobileAssetTracking   CreatePlaceIndexRequestBodyPricingPlanEnum = "MobileAssetTracking"
	CreatePlaceIndexRequestBodyPricingPlanEnumMobileAssetManagement CreatePlaceIndexRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type CreatePlaceIndexRequestBody struct {
	DataSource              string                                              `json:"DataSource"`
	DataSourceConfiguration *CreatePlaceIndexRequestBodyDataSourceConfiguration `json:"DataSourceConfiguration"`
	Description             *string                                             `json:"Description"`
	IndexName               string                                              `json:"IndexName"`
	PricingPlan             CreatePlaceIndexRequestBodyPricingPlanEnum          `json:"PricingPlan"`
	Tags                    map[string]string                                   `json:"Tags"`
}

type CreatePlaceIndexRequest struct {
	Headers CreatePlaceIndexHeaders
	Request CreatePlaceIndexRequestBody `request:"mediaType=application/json"`
}

type CreatePlaceIndexResponse struct {
	AccessDeniedException    *interface{}
	ConflictException        *interface{}
	ContentType              string
	CreatePlaceIndexResponse *shared.CreatePlaceIndexResponse
	InternalServerException  *interface{}
	StatusCode               int64
	ThrottlingException      *interface{}
	ValidationException      *interface{}
}
