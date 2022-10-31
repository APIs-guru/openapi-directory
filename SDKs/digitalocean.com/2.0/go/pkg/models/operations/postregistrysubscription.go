package operations

import (
"openapi/pkg/models/shared")


type PostRegistrySubscriptionRequestBodyTierSlugEnum string

const (
    PostRegistrySubscriptionRequestBodyTierSlugEnumStarter PostRegistrySubscriptionRequestBodyTierSlugEnum = "starter"
PostRegistrySubscriptionRequestBodyTierSlugEnumBasic PostRegistrySubscriptionRequestBodyTierSlugEnum = "basic"
PostRegistrySubscriptionRequestBodyTierSlugEnumProfessional PostRegistrySubscriptionRequestBodyTierSlugEnum = "professional"
)


type PostRegistrySubscriptionRequestBody struct {
    TierSlug *PostRegistrySubscriptionRequestBodyTierSlugEnum `json:"tier_slug,omitempty"`
    
}

type PostRegistrySubscriptionRequest struct {
    Request *PostRegistrySubscriptionRequestBody `request:"mediaType=application/json"`
    
}

type PostRegistrySubscription401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type PostRegistrySubscriptionResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    PostRegistrySubscription401ApplicationJSONObject *PostRegistrySubscription401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1 *shared.Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1 
    
}

