package operations

import (
"openapi/pkg/models/shared")


type ListRegexPatternSetsXAmzTargetEnum string

const (
    ListRegexPatternSetsXAmzTargetEnumAwswafRegional20161128ListRegexPatternSets ListRegexPatternSetsXAmzTargetEnum = "AWSWAF_Regional_20161128.ListRegexPatternSets"
)


type ListRegexPatternSetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListRegexPatternSetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListRegexPatternSetsRequest struct {
    Headers ListRegexPatternSetsHeaders 
    Request shared.ListRegexPatternSetsRequest `request:"mediaType=application/json"`
    
}

type ListRegexPatternSetsResponse struct {
    ContentType string 
    ListRegexPatternSetsResponse *shared.ListRegexPatternSetsResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    
}

