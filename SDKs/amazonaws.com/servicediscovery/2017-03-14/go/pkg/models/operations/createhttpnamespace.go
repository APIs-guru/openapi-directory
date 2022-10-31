package operations

import (
"openapi/pkg/models/shared")


type CreateHTTPNamespaceXAmzTargetEnum string

const (
    CreateHTTPNamespaceXAmzTargetEnumRoute53AutoNamingV20170314CreateHTTPNamespace CreateHTTPNamespaceXAmzTargetEnum = "Route53AutoNaming_v20170314.CreateHttpNamespace"
)


type CreateHTTPNamespaceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateHTTPNamespaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateHTTPNamespaceRequest struct {
    Headers CreateHTTPNamespaceHeaders 
    Request shared.CreateHTTPNamespaceRequest `request:"mediaType=application/json"`
    
}

type CreateHTTPNamespaceResponse struct {
    ContentType string 
    CreateHTTPNamespaceResponse *shared.CreateHTTPNamespaceResponse 
    DuplicateRequest *interface{} 
    InvalidInput *interface{} 
    NamespaceAlreadyExists *interface{} 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    TooManyTagsException *interface{} 
    
}

