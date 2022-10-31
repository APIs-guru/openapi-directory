package operations



type PatchTokenPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}


type PatchTokenRequestBodyChannelEnum string

const (
    PatchTokenRequestBodyChannelEnumPhysical PatchTokenRequestBodyChannelEnum = "physical"
PatchTokenRequestBodyChannelEnumSlack PatchTokenRequestBodyChannelEnum = "slack"
PatchTokenRequestBodyChannelEnumTelegram PatchTokenRequestBodyChannelEnum = "telegram"
PatchTokenRequestBodyChannelEnumSms PatchTokenRequestBodyChannelEnum = "sms"
)


type PatchTokenRequestBody struct {
    Active *bool `json:"active,omitempty"`
    Channel *PatchTokenRequestBodyChannelEnum `json:"channel,omitempty"`
    Driver *string `json:"driver,omitempty"`
    PhysicalID *string `json:"physicalId,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type PatchTokenRequest struct {
    PathParams PatchTokenPathParams 
    Request PatchTokenRequestBody `request:"mediaType=application/json"`
    
}

type PatchToken201ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    Ok *bool `json:"ok,omitempty"`
    Result []interface{} `json:"result,omitempty"`
    
}

type PatchTokenResponse struct {
    ContentType string 
    StatusCode int64 
    PatchToken201ApplicationJSONObject *PatchToken201ApplicationJSON 
    
}

