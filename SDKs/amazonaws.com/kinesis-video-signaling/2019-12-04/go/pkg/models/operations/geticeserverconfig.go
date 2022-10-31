package operations

import (
"openapi/pkg/models/shared")

type GetIceServerConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type GetIceServerConfigRequestBodyServiceEnum string

const (
    GetIceServerConfigRequestBodyServiceEnumTurn GetIceServerConfigRequestBodyServiceEnum = "TURN"
)


type GetIceServerConfigRequestBody struct {
    ChannelArn string `json:"ChannelARN"`
    ClientID *string `json:"ClientId,omitempty"`
    Service *GetIceServerConfigRequestBodyServiceEnum `json:"Service,omitempty"`
    Username *string `json:"Username,omitempty"`
    
}

type GetIceServerConfigRequest struct {
    Headers GetIceServerConfigHeaders 
    Request GetIceServerConfigRequestBody `request:"mediaType=application/json"`
    
}

type GetIceServerConfigResponse struct {
    ClientLimitExceededException *interface{} 
    ContentType string 
    GetIceServerConfigResponse *shared.GetIceServerConfigResponse 
    InvalidArgumentException *interface{} 
    InvalidClientException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    SessionExpiredException *interface{} 
    StatusCode int64 
    
}

