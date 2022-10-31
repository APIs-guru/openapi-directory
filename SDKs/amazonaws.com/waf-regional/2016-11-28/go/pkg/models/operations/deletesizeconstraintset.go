package operations

import (
"openapi/pkg/models/shared")


type DeleteSizeConstraintSetXAmzTargetEnum string

const (
    DeleteSizeConstraintSetXAmzTargetEnumAwswafRegional20161128DeleteSizeConstraintSet DeleteSizeConstraintSetXAmzTargetEnum = "AWSWAF_Regional_20161128.DeleteSizeConstraintSet"
)


type DeleteSizeConstraintSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteSizeConstraintSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteSizeConstraintSetRequest struct {
    Headers DeleteSizeConstraintSetHeaders 
    Request shared.DeleteSizeConstraintSetRequest `request:"mediaType=application/json"`
    
}

type DeleteSizeConstraintSetResponse struct {
    ContentType string 
    DeleteSizeConstraintSetResponse *shared.DeleteSizeConstraintSetResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafNonEmptyEntityException *interface{} 
    WafNonexistentItemException *interface{} 
    WafReferencedItemException *interface{} 
    WafStaleDataException *interface{} 
    
}

