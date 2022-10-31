package operations

import (
"openapi/pkg/models/shared")


type GetSQLInjectionMatchSetXAmzTargetEnum string

const (
    GetSQLInjectionMatchSetXAmzTargetEnumAwswafRegional20161128GetSQLInjectionMatchSet GetSQLInjectionMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.GetSqlInjectionMatchSet"
)


type GetSQLInjectionMatchSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetSQLInjectionMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetSQLInjectionMatchSetRequest struct {
    Headers GetSQLInjectionMatchSetHeaders 
    Request shared.GetSQLInjectionMatchSetRequest `request:"mediaType=application/json"`
    
}

type GetSQLInjectionMatchSetResponse struct {
    ContentType string 
    GetSQLInjectionMatchSetResponse *shared.GetSQLInjectionMatchSetResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

