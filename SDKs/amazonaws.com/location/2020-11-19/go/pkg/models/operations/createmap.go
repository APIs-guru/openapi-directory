package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMapHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateMapRequestBodyConfiguration
// Specifies the map tile style selected from an available provider.
type CreateMapRequestBodyConfiguration struct {
	Style *string `json:"Style,omitempty"`
}

type CreateMapRequestBodyPricingPlanEnum string

const (
	CreateMapRequestBodyPricingPlanEnumRequestBasedUsage     CreateMapRequestBodyPricingPlanEnum = "RequestBasedUsage"
	CreateMapRequestBodyPricingPlanEnumMobileAssetTracking   CreateMapRequestBodyPricingPlanEnum = "MobileAssetTracking"
	CreateMapRequestBodyPricingPlanEnumMobileAssetManagement CreateMapRequestBodyPricingPlanEnum = "MobileAssetManagement"
)

type CreateMapRequestBody struct {
	Configuration CreateMapRequestBodyConfiguration   `json:"Configuration"`
	Description   *string                             `json:"Description,omitempty"`
	MapName       string                              `json:"MapName"`
	PricingPlan   CreateMapRequestBodyPricingPlanEnum `json:"PricingPlan"`
	Tags          map[string]string                   `json:"Tags,omitempty"`
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
