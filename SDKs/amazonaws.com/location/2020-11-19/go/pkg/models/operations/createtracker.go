package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTrackerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateTrackerRequestBodyPricingPlanEnum string

const (
	CreateTrackerRequestBodyPricingPlanEnumRequestBasedUsage     CreateTrackerRequestBodyPricingPlanEnum = "RequestBasedUsage"
	CreateTrackerRequestBodyPricingPlanEnumMobileAssetTracking   CreateTrackerRequestBodyPricingPlanEnum = "MobileAssetTracking"
	CreateTrackerRequestBodyPricingPlanEnumMobileAssetManagement CreateTrackerRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type CreateTrackerRequestBody struct {
	Description           *string                                 `json:"Description"`
	KmsKeyID              *string                                 `json:"KmsKeyId"`
	PricingPlan           CreateTrackerRequestBodyPricingPlanEnum `json:"PricingPlan"`
	PricingPlanDataSource *string                                 `json:"PricingPlanDataSource"`
	Tags                  map[string]string                       `json:"Tags"`
	TrackerName           string                                  `json:"TrackerName"`
}

type CreateTrackerRequest struct {
	Headers CreateTrackerHeaders
	Request CreateTrackerRequestBody `request:"mediaType=application/json"`
}

type CreateTrackerResponse struct {
	AccessDeniedException   *interface{}
	ConflictException       *interface{}
	ContentType             string
	CreateTrackerResponse   *shared.CreateTrackerResponse
	InternalServerException *interface{}
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
