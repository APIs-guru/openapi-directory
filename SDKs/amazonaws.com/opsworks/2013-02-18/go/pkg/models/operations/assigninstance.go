package operations

import (
"openapi/pkg/models/shared")


type AssignInstanceXAmzTargetEnum string

const (
    AssignInstanceXAmzTargetEnumOpsWorks20130218AssignInstance AssignInstanceXAmzTargetEnum = "OpsWorks_20130218.AssignInstance"
)


type AssignInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssignInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssignInstanceRequest struct {
    Headers AssignInstanceHeaders 
    Request shared.AssignInstanceRequest `request:"mediaType=application/json"`
    
}

type AssignInstanceResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

