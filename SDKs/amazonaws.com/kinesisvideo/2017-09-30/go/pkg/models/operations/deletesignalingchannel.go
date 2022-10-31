package operations



type DeleteSignalingChannelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteSignalingChannelRequestBody struct {
    ChannelArn string `json:"ChannelARN"`
    CurrentVersion *string `json:"CurrentVersion,omitempty"`
    
}

type DeleteSignalingChannelRequest struct {
    Headers DeleteSignalingChannelHeaders 
    Request DeleteSignalingChannelRequestBody `request:"mediaType=application/json"`
    
}

type DeleteSignalingChannelResponse struct {
    AccessDeniedException *interface{} 
    ClientLimitExceededException *interface{} 
    ContentType string 
    DeleteSignalingChannelOutput map[string]interface{} 
    InvalidArgumentException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    VersionMismatchException *interface{} 
    
}

