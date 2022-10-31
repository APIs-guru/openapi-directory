package operations



type CancelWorldExportJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CancelWorldExportJobRequestBody struct {
    Job string `json:"job"`
    
}

type CancelWorldExportJobRequest struct {
    Headers CancelWorldExportJobHeaders 
    Request CancelWorldExportJobRequestBody `request:"mediaType=application/json"`
    
}

type CancelWorldExportJobResponse struct {
    CancelWorldExportJobResponse map[string]interface{} 
    ContentType string 
    InternalServerException *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

