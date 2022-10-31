package operations

import (
"openapi/pkg/models/shared")


type GetResolverDnssecConfigXAmzTargetEnum string

const (
    GetResolverDnssecConfigXAmzTargetEnumRoute53ResolverGetResolverDnssecConfig GetResolverDnssecConfigXAmzTargetEnum = "Route53Resolver.GetResolverDnssecConfig"
)


type GetResolverDnssecConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetResolverDnssecConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetResolverDnssecConfigRequest struct {
    Headers GetResolverDnssecConfigHeaders 
    Request shared.GetResolverDnssecConfigRequest `request:"mediaType=application/json"`
    
}

type GetResolverDnssecConfigResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetResolverDnssecConfigResponse *shared.GetResolverDnssecConfigResponse 
    InternalServiceErrorException *interface{} 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

