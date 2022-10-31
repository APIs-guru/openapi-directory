package operations

import (
"openapi/pkg/models/shared")


type UpdateHTTPNamespaceXAmzTargetEnum string

const (
    UpdateHTTPNamespaceXAmzTargetEnumRoute53AutoNamingV20170314UpdateHTTPNamespace UpdateHTTPNamespaceXAmzTargetEnum = "Route53AutoNaming_v20170314.UpdateHttpNamespace"
)


type UpdateHTTPNamespaceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateHTTPNamespaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateHTTPNamespaceRequest struct {
    Headers UpdateHTTPNamespaceHeaders 
    Request shared.UpdateHTTPNamespaceRequest `request:"mediaType=application/json"`
    
}

type UpdateHTTPNamespaceResponse struct {
    ContentType string 
    DuplicateRequest *interface{} 
    InvalidInput *interface{} 
    NamespaceNotFound *interface{} 
    ResourceInUse *interface{} 
    StatusCode int64 
    UpdateHTTPNamespaceResponse *shared.UpdateHTTPNamespaceResponse 
    
}

