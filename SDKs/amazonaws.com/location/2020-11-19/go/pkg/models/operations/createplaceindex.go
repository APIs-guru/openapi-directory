package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePlaceIndexHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreatePlaceIndexRequestBodyDataSourceConfiguration struct {
	IntendedUse *shared.IntendedUseEnum `json:"IntendedUse,omitempty"`
}

type CreatePlaceIndexRequestBodyPricingPlanEnum string

const (
	CreatePlaceIndexRequestBodyPricingPlanEnumRequestBasedUsage     CreatePlaceIndexRequestBodyPricingPlanEnum = "RequestBasedUsage"
	CreatePlaceIndexRequestBodyPricingPlanEnumMobileAssetTracking   CreatePlaceIndexRequestBodyPricingPlanEnum = "MobileAssetTracking"
	CreatePlaceIndexRequestBodyPricingPlanEnumMobileAssetManagement CreatePlaceIndexRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type CreatePlaceIndexRequestBody struct {
	DataSource              string                                              `json:"DataSource"`
	DataSourceConfiguration *CreatePlaceIndexRequestBodyDataSourceConfiguration `json:"DataSourceConfiguration,omitempty"`
	Description             *string                                             `json:"Description,omitempty"`
	IndexName               string                                              `json:"IndexName"`
	PricingPlan             CreatePlaceIndexRequestBodyPricingPlanEnum          `json:"PricingPlan"`
	Tags                    map[string]string                                   `json:"Tags,omitempty"`
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
