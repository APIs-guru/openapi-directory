package operations

import (
"openapi/pkg/models/shared")


type DeregisterEcsClusterXAmzTargetEnum string

const (
    DeregisterEcsClusterXAmzTargetEnumOpsWorks20130218DeregisterEcsCluster DeregisterEcsClusterXAmzTargetEnum = "OpsWorks_20130218.DeregisterEcsCluster"
)


type DeregisterEcsClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeregisterEcsClusterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeregisterEcsClusterRequest struct {
    Headers DeregisterEcsClusterHeaders 
    Request shared.DeregisterEcsClusterRequest `request:"mediaType=application/json"`
    
}

type DeregisterEcsClusterResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

