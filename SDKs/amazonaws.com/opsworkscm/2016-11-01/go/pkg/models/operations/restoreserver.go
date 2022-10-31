package operations

import (
"openapi/pkg/models/shared")


type RestoreServerXAmzTargetEnum string

const (
    RestoreServerXAmzTargetEnumOpsWorksCmV20161101RestoreServer RestoreServerXAmzTargetEnum = "OpsWorksCM_V2016_11_01.RestoreServer"
)


type RestoreServerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RestoreServerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RestoreServerRequest struct {
    Headers RestoreServerHeaders 
    Request shared.RestoreServerRequest `request:"mediaType=application/json"`
    
}

type RestoreServerResponse struct {
    ContentType string 
    InvalidStateException *interface{} 
    ResourceNotFoundException *interface{} 
    RestoreServerResponse *shared.RestoreServerResponse 
    StatusCode int64 
    ValidationException *interface{} 
    
}

