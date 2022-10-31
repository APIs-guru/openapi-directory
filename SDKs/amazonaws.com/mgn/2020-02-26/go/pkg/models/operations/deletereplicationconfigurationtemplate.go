package operations



type DeleteReplicationConfigurationTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteReplicationConfigurationTemplateRequestBody struct {
    ReplicationConfigurationTemplateID string `json:"replicationConfigurationTemplateID"`
    
}

type DeleteReplicationConfigurationTemplateRequest struct {
    Headers DeleteReplicationConfigurationTemplateHeaders 
    Request DeleteReplicationConfigurationTemplateRequestBody `request:"mediaType=application/json"`
    
}

type DeleteReplicationConfigurationTemplateResponse struct {
    ConflictException *interface{} 
    ContentType string 
    DeleteReplicationConfigurationTemplateResponse map[string]interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UninitializedAccountException *interface{} 
    
}

