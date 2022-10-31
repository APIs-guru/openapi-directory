package operations

import (
"openapi/pkg/models/shared")


type CreateResolverQueryLogConfigXAmzTargetEnum string

const (
    CreateResolverQueryLogConfigXAmzTargetEnumRoute53ResolverCreateResolverQueryLogConfig CreateResolverQueryLogConfigXAmzTargetEnum = "Route53Resolver.CreateResolverQueryLogConfig"
)


type CreateResolverQueryLogConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateResolverQueryLogConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateResolverQueryLogConfigRequest struct {
    Headers CreateResolverQueryLogConfigHeaders 
    Request shared.CreateResolverQueryLogConfigRequest `request:"mediaType=application/json"`
    
}

type CreateResolverQueryLogConfigResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateResolverQueryLogConfigResponse *shared.CreateResolverQueryLogConfigResponse 
    InternalServiceErrorException *interface{} 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

