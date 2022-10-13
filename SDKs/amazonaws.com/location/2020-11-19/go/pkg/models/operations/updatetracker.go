package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTrackerPathParams struct {
	TrackerName string `pathParam:"style=simple,explode=false,name=TrackerName"`
}

type UpdateTrackerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateTrackerRequestBodyPricingPlanEnum string

const (
	UpdateTrackerRequestBodyPricingPlanEnumRequestBasedUsage     UpdateTrackerRequestBodyPricingPlanEnum = "RequestBasedUsage"
	UpdateTrackerRequestBodyPricingPlanEnumMobileAssetTracking   UpdateTrackerRequestBodyPricingPlanEnum = "MobileAssetTracking"
	UpdateTrackerRequestBodyPricingPlanEnumMobileAssetManagement UpdateTrackerRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type UpdateTrackerRequestBody struct {
	Description           *string                                  `json:"Description"`
	PricingPlan           *UpdateTrackerRequestBodyPricingPlanEnum `json:"PricingPlan"`
	PricingPlanDataSource *string                                  `json:"PricingPlanDataSource"`
}

type UpdateTrackerRequest struct {
	PathParams UpdateTrackerPathParams
	Headers    UpdateTrackerHeaders
	Request    UpdateTrackerRequestBody `request:"mediaType=application/json"`
}

type UpdateTrackerResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateTrackerResponse     *shared.UpdateTrackerResponse
	ValidationException       *interface{}
}
