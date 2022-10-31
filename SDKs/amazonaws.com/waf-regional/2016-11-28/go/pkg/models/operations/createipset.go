package operations

import (
"openapi/pkg/models/shared")


type CreateIPSetXAmzTargetEnum string

const (
    CreateIPSetXAmzTargetEnumAwswafRegional20161128CreateIPSet CreateIPSetXAmzTargetEnum = "AWSWAF_Regional_20161128.CreateIPSet"
)


type CreateIPSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateIPSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateIPSetRequest struct {
    Headers CreateIPSetHeaders 
    Request shared.CreateIPSetRequest `request:"mediaType=application/json"`
    
}

type CreateIPSetResponse struct {
    ContentType string 
    CreateIPSetResponse *shared.CreateIPSetResponse 
    StatusCode int64 
    WafDisallowedNameException *interface{} 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafInvalidParameterException *interface{} 
    WafLimitsExceededException *interface{} 
    WafStaleDataException *interface{} 
    
}

