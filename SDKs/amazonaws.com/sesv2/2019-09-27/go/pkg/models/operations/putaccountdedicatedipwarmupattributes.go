package operations



type PutAccountDedicatedIPWarmupAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutAccountDedicatedIPWarmupAttributesRequestBody struct {
    AutoWarmupEnabled *bool `json:"AutoWarmupEnabled,omitempty"`
    
}

type PutAccountDedicatedIPWarmupAttributesRequest struct {
    Headers PutAccountDedicatedIPWarmupAttributesHeaders 
    Request PutAccountDedicatedIPWarmupAttributesRequestBody `request:"mediaType=application/json"`
    
}

type PutAccountDedicatedIPWarmupAttributesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    PutAccountDedicatedIPWarmupAttributesResponse map[string]interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

