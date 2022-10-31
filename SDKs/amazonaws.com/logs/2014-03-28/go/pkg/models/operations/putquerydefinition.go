package operations

import (
"openapi/pkg/models/shared")


type PutQueryDefinitionXAmzTargetEnum string

const (
    PutQueryDefinitionXAmzTargetEnumLogs20140328PutQueryDefinition PutQueryDefinitionXAmzTargetEnum = "Logs_20140328.PutQueryDefinition"
)


type PutQueryDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutQueryDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutQueryDefinitionRequest struct {
    Headers PutQueryDefinitionHeaders 
    Request shared.PutQueryDefinitionRequest `request:"mediaType=application/json"`
    
}

type PutQueryDefinitionResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    PutQueryDefinitionResponse *shared.PutQueryDefinitionResponse 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

