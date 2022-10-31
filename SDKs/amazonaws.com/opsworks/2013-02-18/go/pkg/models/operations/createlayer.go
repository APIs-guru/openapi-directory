package operations

import (
"openapi/pkg/models/shared")


type CreateLayerXAmzTargetEnum string

const (
    CreateLayerXAmzTargetEnumOpsWorks20130218CreateLayer CreateLayerXAmzTargetEnum = "OpsWorks_20130218.CreateLayer"
)


type CreateLayerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateLayerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateLayerRequest struct {
    Headers CreateLayerHeaders 
    Request shared.CreateLayerRequest `request:"mediaType=application/json"`
    
}

type CreateLayerResponse struct {
    ContentType string 
    CreateLayerResult *shared.CreateLayerResult 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

