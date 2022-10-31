package operations

import (
"openapi/pkg/models/shared")


type AssociateHealthCheckXAmzTargetEnum string

const (
    AssociateHealthCheckXAmzTargetEnumAwsShield20160616AssociateHealthCheck AssociateHealthCheckXAmzTargetEnum = "AWSShield_20160616.AssociateHealthCheck"
)


type AssociateHealthCheckHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateHealthCheckXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateHealthCheckRequest struct {
    Headers AssociateHealthCheckHeaders 
    Request shared.AssociateHealthCheckRequest `request:"mediaType=application/json"`
    
}

type AssociateHealthCheckResponse struct {
    AssociateHealthCheckResponse map[string]interface{} 
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    LimitsExceededException *interface{} 
    OptimisticLockException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

