package operations



type DeleteGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteGroupRequestBody struct {
    GroupArn *string `json:"GroupARN,omitempty"`
    GroupName *string `json:"GroupName,omitempty"`
    
}

type DeleteGroupRequest struct {
    Headers DeleteGroupHeaders 
    Request DeleteGroupRequestBody `request:"mediaType=application/json"`
    
}

type DeleteGroupResponse struct {
    ContentType string 
    DeleteGroupResult map[string]interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottledException *interface{} 
    
}

