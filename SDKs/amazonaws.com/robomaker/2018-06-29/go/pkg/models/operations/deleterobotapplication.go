package operations



type DeleteRobotApplicationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteRobotApplicationRequestBody struct {
    Application string `json:"application"`
    ApplicationVersion *string `json:"applicationVersion,omitempty"`
    
}

type DeleteRobotApplicationRequest struct {
    Headers DeleteRobotApplicationHeaders 
    Request DeleteRobotApplicationRequestBody `request:"mediaType=application/json"`
    
}

type DeleteRobotApplicationResponse struct {
    ContentType string 
    DeleteRobotApplicationResponse map[string]interface{} 
    InternalServerException *interface{} 
    InvalidParameterException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

