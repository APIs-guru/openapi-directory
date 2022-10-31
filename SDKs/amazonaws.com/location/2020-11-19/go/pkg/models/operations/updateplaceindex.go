package operations

import (
"openapi/pkg/models/shared")

type UpdatePlaceIndexPathParams struct {
    IndexName string `pathParam:"style=simple,explode=false,name=IndexName"`
    
}

type UpdatePlaceIndexHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdatePlaceIndexRequestBodyDataSourceConfiguration struct {
    IntendedUse *shared.IntendedUseEnum `json:"IntendedUse,omitempty"`
    
}


type UpdatePlaceIndexRequestBodyPricingPlanEnum string

const (
    UpdatePlaceIndexRequestBodyPricingPlanEnumRequestBasedUsage UpdatePlaceIndexRequestBodyPricingPlanEnum = "RequestBasedUsage"
UpdatePlaceIndexRequestBodyPricingPlanEnumMobileAssetTracking UpdatePlaceIndexRequestBodyPricingPlanEnum = "MobileAssetTracking"
UpdatePlaceIndexRequestBodyPricingPlanEnumMobileAssetManagement UpdatePlaceIndexRequestBodyPricingPlanEnum = "MobileAssetManagement"
)


type UpdatePlaceIndexRequestBody struct {
    DataSourceConfiguration *UpdatePlaceIndexRequestBodyDataSourceConfiguration `json:"DataSourceConfiguration,omitempty"`
    Description *string `json:"Description,omitempty"`
    PricingPlan *UpdatePlaceIndexRequestBodyPricingPlanEnum `json:"PricingPlan,omitempty"`
    
}

type UpdatePlaceIndexRequest struct {
    PathParams UpdatePlaceIndexPathParams 
    Headers UpdatePlaceIndexHeaders 
    Request UpdatePlaceIndexRequestBody `request:"mediaType=application/json"`
    
}

type UpdatePlaceIndexResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdatePlaceIndexResponse *shared.UpdatePlaceIndexResponse 
    ValidationException *interface{} 
    
}

