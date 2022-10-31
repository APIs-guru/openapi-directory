package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGeofenceCollectionPathParams struct {
	CollectionName string `pathParam:"style=simple,explode=false,name=CollectionName"`
}

type UpdateGeofenceCollectionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateGeofenceCollectionRequestBodyPricingPlanEnum string

const (
	UpdateGeofenceCollectionRequestBodyPricingPlanEnumRequestBasedUsage     UpdateGeofenceCollectionRequestBodyPricingPlanEnum = "RequestBasedUsage"
	UpdateGeofenceCollectionRequestBodyPricingPlanEnumMobileAssetTracking   UpdateGeofenceCollectionRequestBodyPricingPlanEnum = "MobileAssetTracking"
	UpdateGeofenceCollectionRequestBodyPricingPlanEnumMobileAssetManagement UpdateGeofenceCollectionRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type UpdateGeofenceCollectionRequestBody struct {
	Description           *string                                             `json:"Description,omitempty"`
	PricingPlan           *UpdateGeofenceCollectionRequestBodyPricingPlanEnum `json:"PricingPlan,omitempty"`
	PricingPlanDataSource *string                                             `json:"PricingPlanDataSource,omitempty"`
}

type UpdateGeofenceCollectionRequest struct {
	PathParams UpdateGeofenceCollectionPathParams
	Headers    UpdateGeofenceCollectionHeaders
	Request    UpdateGeofenceCollectionRequestBody `request:"mediaType=application/json"`
}

type UpdateGeofenceCollectionResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	InternalServerException          *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	UpdateGeofenceCollectionResponse *shared.UpdateGeofenceCollectionResponse
	ValidationException              *interface{}
}
