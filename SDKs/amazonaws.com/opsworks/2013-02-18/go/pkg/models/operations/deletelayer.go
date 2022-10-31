package operations

import (
"openapi/pkg/models/shared")


type DeleteLayerXAmzTargetEnum string

const (
    DeleteLayerXAmzTargetEnumOpsWorks20130218DeleteLayer DeleteLayerXAmzTargetEnum = "OpsWorks_20130218.DeleteLayer"
)


type DeleteLayerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteLayerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteLayerRequest struct {
    Headers DeleteLayerHeaders 
    Request shared.DeleteLayerRequest `request:"mediaType=application/json"`
    
}

type DeleteLayerResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

