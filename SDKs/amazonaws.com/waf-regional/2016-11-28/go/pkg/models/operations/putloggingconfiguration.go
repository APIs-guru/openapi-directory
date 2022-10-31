package operations

import (
"openapi/pkg/models/shared")


type PutLoggingConfigurationXAmzTargetEnum string

const (
    PutLoggingConfigurationXAmzTargetEnumAwswafRegional20161128PutLoggingConfiguration PutLoggingConfigurationXAmzTargetEnum = "AWSWAF_Regional_20161128.PutLoggingConfiguration"
)


type PutLoggingConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutLoggingConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutLoggingConfigurationRequest struct {
    Headers PutLoggingConfigurationHeaders 
    Request shared.PutLoggingConfigurationRequest `request:"mediaType=application/json"`
    
}

type PutLoggingConfigurationResponse struct {
    ContentType string 
    PutLoggingConfigurationResponse *shared.PutLoggingConfigurationResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafNonexistentItemException *interface{} 
    WafServiceLinkedRoleErrorException *interface{} 
    WafStaleDataException *interface{} 
    
}

