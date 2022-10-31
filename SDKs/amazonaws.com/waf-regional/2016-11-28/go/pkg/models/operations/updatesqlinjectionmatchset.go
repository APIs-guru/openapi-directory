package operations

import (
"openapi/pkg/models/shared")


type UpdateSQLInjectionMatchSetXAmzTargetEnum string

const (
    UpdateSQLInjectionMatchSetXAmzTargetEnumAwswafRegional20161128UpdateSQLInjectionMatchSet UpdateSQLInjectionMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet"
)


type UpdateSQLInjectionMatchSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateSQLInjectionMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateSQLInjectionMatchSetRequest struct {
    Headers UpdateSQLInjectionMatchSetHeaders 
    Request shared.UpdateSQLInjectionMatchSetRequest `request:"mediaType=application/json"`
    
}

type UpdateSQLInjectionMatchSetResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateSQLInjectionMatchSetResponse *shared.UpdateSQLInjectionMatchSetResponse 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafInvalidOperationException *interface{} 
    WafInvalidParameterException *interface{} 
    WafLimitsExceededException *interface{} 
    WafNonexistentContainerException *interface{} 
    WafNonexistentItemException *interface{} 
    WafStaleDataException *interface{} 
    
}

