package operations

import (
"openapi/pkg/models/shared")


type UpdateServiceXAmzTargetEnum string

const (
    UpdateServiceXAmzTargetEnumRoute53AutoNamingV20170314UpdateService UpdateServiceXAmzTargetEnum = "Route53AutoNaming_v20170314.UpdateService"
)


type UpdateServiceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateServiceRequest struct {
    Headers UpdateServiceHeaders 
    Request shared.UpdateServiceRequest `request:"mediaType=application/json"`
    
}

type UpdateServiceResponse struct {
    ContentType string 
    DuplicateRequest *interface{} 
    InvalidInput *interface{} 
    ServiceNotFound *interface{} 
    StatusCode int64 
    UpdateServiceResponse *shared.UpdateServiceResponse 
    
}

