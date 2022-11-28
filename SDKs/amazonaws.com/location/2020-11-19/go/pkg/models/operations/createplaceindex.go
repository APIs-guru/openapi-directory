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

// CreatePlaceIndexRequestBodyDataSourceConfiguration
// <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>
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
