package operations



type DeleteIncidentRecordHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteIncidentRecordRequestBody struct {
    Arn string `json:"arn"`
    
}

type DeleteIncidentRecordRequest struct {
    Headers DeleteIncidentRecordHeaders 
    Request DeleteIncidentRecordRequestBody `request:"mediaType=application/json"`
    
}

type DeleteIncidentRecordResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeleteIncidentRecordOutput map[string]interface{} 
    InternalServerException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

