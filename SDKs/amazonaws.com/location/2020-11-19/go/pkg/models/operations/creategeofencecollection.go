package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGeofenceCollectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateGeofenceCollectionRequestBodyPricingPlanEnum string

const (
	CreateGeofenceCollectionRequestBodyPricingPlanEnumRequestBasedUsage     CreateGeofenceCollectionRequestBodyPricingPlanEnum = "RequestBasedUsage"
	CreateGeofenceCollectionRequestBodyPricingPlanEnumMobileAssetTracking   CreateGeofenceCollectionRequestBodyPricingPlanEnum = "MobileAssetTracking"
	CreateGeofenceCollectionRequestBodyPricingPlanEnumMobileAssetManagement CreateGeofenceCollectionRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type CreateGeofenceCollectionRequestBody struct {
	CollectionName        string                                             `json:"CollectionName"`
	Description           *string                                            `json:"Description"`
	KmsKeyID              *string                                            `json:"KmsKeyId"`
	PricingPlan           CreateGeofenceCollectionRequestBodyPricingPlanEnum `json:"PricingPlan"`
	PricingPlanDataSource *string                                            `json:"PricingPlanDataSource"`
	Tags                  map[string]string                                  `json:"Tags"`
}

type CreateGeofenceCollectionRequest struct {
	Headers CreateGeofenceCollectionHeaders
	Request CreateGeofenceCollectionRequestBody `request:"mediaType=application/json"`
}

type CreateGeofenceCollectionResponse struct {
	AccessDeniedException            *interface{}
	ConflictException                *interface{}
	ContentType                      string
	CreateGeofenceCollectionResponse *shared.CreateGeofenceCollectionResponse
	InternalServerException          *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	ValidationException              *interface{}
}
