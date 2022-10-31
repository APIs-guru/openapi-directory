package operations

import (
"openapi/pkg/models/shared")


type CreateRegistryRequestBodySubscriptionTierSlugEnum string

const (
    CreateRegistryRequestBodySubscriptionTierSlugEnumStarter CreateRegistryRequestBodySubscriptionTierSlugEnum = "starter"
CreateRegistryRequestBodySubscriptionTierSlugEnumBasic CreateRegistryRequestBodySubscriptionTierSlugEnum = "basic"
CreateRegistryRequestBodySubscriptionTierSlugEnumProfessional CreateRegistryRequestBodySubscriptionTierSlugEnum = "professional"
)


type CreateRegistryRequestBody struct {
    Name string `json:"name"`
    SubscriptionTierSlug CreateRegistryRequestBodySubscriptionTierSlugEnum `json:"subscription_tier_slug"`
    
}

type CreateRegistryRequest struct {
    Request CreateRegistryRequestBody `request:"mediaType=application/json"`
    
}

type CreateRegistry401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type CreateRegistryResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateRegistry201ApplicationJSONAny *interface{} 
    CreateRegistry401ApplicationJSONObject *CreateRegistry401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

