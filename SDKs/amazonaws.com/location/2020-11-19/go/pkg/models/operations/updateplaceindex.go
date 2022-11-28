package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePlaceIndexPathParams struct {
	IndexName string `pathParam:"style=simple,explode=false,name=IndexName"`
}

type UpdatePlaceIndexHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdatePlaceIndexRequestBodyDataSourceConfiguration
// <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>
type UpdatePlaceIndexRequestBodyDataSourceConfiguration struct {
	IntendedUse *shared.IntendedUseEnum `json:"IntendedUse,omitempty"`
}

type UpdatePlaceIndexRequestBodyPricingPlanEnum string

const (
	UpdatePlaceIndexRequestBodyPricingPlanEnumRequestBasedUsage     UpdatePlaceIndexRequestBodyPricingPlanEnum = "RequestBasedUsage"
	UpdatePlaceIndexRequestBodyPricingPlanEnumMobileAssetTracking   UpdatePlaceIndexRequestBodyPricingPlanEnum = "MobileAssetTracking"
	UpdatePlaceIndexRequestBodyPricingPlanEnumMobileAssetManagement UpdatePlaceIndexRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type UpdatePlaceIndexRequestBody struct {
	DataSourceConfiguration *UpdatePlaceIndexRequestBodyDataSourceConfiguration `json:"DataSourceConfiguration,omitempty"`
	Description             *string                                             `json:"Description,omitempty"`
	PricingPlan             *UpdatePlaceIndexRequestBodyPricingPlanEnum         `json:"PricingPlan,omitempty"`
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
