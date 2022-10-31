package operations

import (
"openapi/pkg/models/shared")


type CreatePublicDNSNamespaceXAmzTargetEnum string

const (
    CreatePublicDNSNamespaceXAmzTargetEnumRoute53AutoNamingV20170314CreatePublicDNSNamespace CreatePublicDNSNamespaceXAmzTargetEnum = "Route53AutoNaming_v20170314.CreatePublicDnsNamespace"
)


type CreatePublicDNSNamespaceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreatePublicDNSNamespaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreatePublicDNSNamespaceRequest struct {
    Headers CreatePublicDNSNamespaceHeaders 
    Request shared.CreatePublicDNSNamespaceRequest `request:"mediaType=application/json"`
    
}

type CreatePublicDNSNamespaceResponse struct {
    ContentType string 
    CreatePublicDNSNamespaceResponse *shared.CreatePublicDNSNamespaceResponse 
    DuplicateRequest *interface{} 
    InvalidInput *interface{} 
    NamespaceAlreadyExists *interface{} 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    TooManyTagsException *interface{} 
    
}

