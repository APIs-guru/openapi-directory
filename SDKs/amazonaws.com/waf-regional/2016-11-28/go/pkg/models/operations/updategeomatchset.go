package operations

import (
"openapi/pkg/models/shared")


type UpdateGeoMatchSetXAmzTargetEnum string

const (
    UpdateGeoMatchSetXAmzTargetEnumAwswafRegional20161128UpdateGeoMatchSet UpdateGeoMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.UpdateGeoMatchSet"
)


type UpdateGeoMatchSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateGeoMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateGeoMatchSetRequest struct {
    Headers UpdateGeoMatchSetHeaders 
    Request shared.UpdateGeoMatchSetRequest `request:"mediaType=application/json"`
    
}

type UpdateGeoMatchSetResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateGeoMatchSetResponse *shared.UpdateGeoMatchSetResponse 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafInvalidOperationException *interface{} 
    WafInvalidParameterException *interface{} 
    WafLimitsExceededException *interface{} 
    WafNonexistentContainerException *interface{} 
    WafNonexistentItemException *interface{} 
    WafReferencedItemException *interface{} 
    WafStaleDataException *interface{} 
    
}

