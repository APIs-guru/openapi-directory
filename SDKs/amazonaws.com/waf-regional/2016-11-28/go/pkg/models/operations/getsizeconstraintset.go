package operations

import (
"openapi/pkg/models/shared")


type GetSizeConstraintSetXAmzTargetEnum string

const (
    GetSizeConstraintSetXAmzTargetEnumAwswafRegional20161128GetSizeConstraintSet GetSizeConstraintSetXAmzTargetEnum = "AWSWAF_Regional_20161128.GetSizeConstraintSet"
)


type GetSizeConstraintSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetSizeConstraintSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetSizeConstraintSetRequest struct {
    Headers GetSizeConstraintSetHeaders 
    Request shared.GetSizeConstraintSetRequest `request:"mediaType=application/json"`
    
}

type GetSizeConstraintSetResponse struct {
    ContentType string 
    GetSizeConstraintSetResponse *shared.GetSizeConstraintSetResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

