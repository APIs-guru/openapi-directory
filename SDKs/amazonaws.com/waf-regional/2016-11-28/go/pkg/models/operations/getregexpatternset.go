package operations

import (
"openapi/pkg/models/shared")


type GetRegexPatternSetXAmzTargetEnum string

const (
    GetRegexPatternSetXAmzTargetEnumAwswafRegional20161128GetRegexPatternSet GetRegexPatternSetXAmzTargetEnum = "AWSWAF_Regional_20161128.GetRegexPatternSet"
)


type GetRegexPatternSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetRegexPatternSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetRegexPatternSetRequest struct {
    Headers GetRegexPatternSetHeaders 
    Request shared.GetRegexPatternSetRequest `request:"mediaType=application/json"`
    
}

type GetRegexPatternSetResponse struct {
    ContentType string 
    GetRegexPatternSetResponse *shared.GetRegexPatternSetResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

