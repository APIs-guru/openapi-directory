package operations



type PutAccountSendingAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutAccountSendingAttributesRequestBody struct {
    SendingEnabled *bool `json:"SendingEnabled,omitempty"`
    
}

type PutAccountSendingAttributesRequest struct {
    Headers PutAccountSendingAttributesHeaders 
    Request PutAccountSendingAttributesRequestBody `request:"mediaType=application/json"`
    
}

type PutAccountSendingAttributesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    PutAccountSendingAttributesResponse map[string]interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

