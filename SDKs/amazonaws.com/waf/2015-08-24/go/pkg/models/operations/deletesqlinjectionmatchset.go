package operations

import (
"openapi/pkg/models/shared")


type DeleteSQLInjectionMatchSetXAmzTargetEnum string

const (
    DeleteSQLInjectionMatchSetXAmzTargetEnumAwswaf20150824DeleteSQLInjectionMatchSet DeleteSQLInjectionMatchSetXAmzTargetEnum = "AWSWAF_20150824.DeleteSqlInjectionMatchSet"
)


type DeleteSQLInjectionMatchSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteSQLInjectionMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteSQLInjectionMatchSetRequest struct {
    Headers DeleteSQLInjectionMatchSetHeaders 
    Request shared.DeleteSQLInjectionMatchSetRequest `request:"mediaType=application/json"`
    
}

type DeleteSQLInjectionMatchSetResponse struct {
    ContentType string 
    DeleteSQLInjectionMatchSetResponse *shared.DeleteSQLInjectionMatchSetResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafNonEmptyEntityException *interface{} 
    WafNonexistentItemException *interface{} 
    WafReferencedItemException *interface{} 
    WafStaleDataException *interface{} 
    
}

