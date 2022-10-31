package operations



type PostChargePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}


type PostChargeRequestBodyActionEnum string

const (
    PostChargeRequestBodyActionEnumStart PostChargeRequestBodyActionEnum = "START"
PostChargeRequestBodyActionEnumStop PostChargeRequestBodyActionEnum = "STOP"
)


type PostChargeRequestBody struct {
    Action PostChargeRequestBodyActionEnum `json:"action"`
    
}

type PostChargeRequest struct {
    PathParams PostChargePathParams 
    Request PostChargeRequestBody `request:"mediaType=application/json"`
    
}

type PostCharge200ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    Ok *bool `json:"ok,omitempty"`
    Result map[string]interface{} `json:"result,omitempty"`
    
}

type PostChargeResponse struct {
    ContentType string 
    StatusCode int64 
    PostCharge200ApplicationJSONObject *PostCharge200ApplicationJSON 
    
}

