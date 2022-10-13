package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMapHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateMapRequestBodyConfiguration struct {
	Style *string `json:"Style"`
}

type CreateMapRequestBodyPricingPlanEnum string

const (
	CreateMapRequestBodyPricingPlanEnumRequestBasedUsage     CreateMapRequestBodyPricingPlanEnum = "RequestBasedUsage"
	CreateMapRequestBodyPricingPlanEnumMobileAssetTracking   CreateMapRequestBodyPricingPlanEnum = "MobileAssetTracking"
	CreateMapRequestBodyPricingPlanEnumMobileAssetManagement CreateMapRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type CreateMapRequestBody struct {
	Configuration CreateMapRequestBodyConfiguration   `json:"Configuration"`
	Description   *string                             `json:"Description"`
	MapName       string                              `json:"MapName"`
	PricingPlan   CreateMapRequestBodyPricingPlanEnum `json:"PricingPlan"`
	Tags          map[string]string                   `json:"Tags"`
}

type CreateMapRequest struct {
	Headers CreateMapHeaders
	Request CreateMapRequestBody `request:"mediaType=application/json"`
}

type CreateMapResponse struct {
	AccessDeniedException   *interface{}
	ConflictException       *interface{}
	ContentType             string
	CreateMapResponse       *shared.CreateMapResponse
	InternalServerException *interface{}
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
