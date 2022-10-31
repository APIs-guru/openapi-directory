package operations

import (
"openapi/pkg/models/shared")


type ListXSSMatchSetsXAmzTargetEnum string

const (
    ListXSSMatchSetsXAmzTargetEnumAwswafRegional20161128ListXSSMatchSets ListXSSMatchSetsXAmzTargetEnum = "AWSWAF_Regional_20161128.ListXssMatchSets"
)


type ListXSSMatchSetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListXSSMatchSetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListXSSMatchSetsRequest struct {
    Headers ListXSSMatchSetsHeaders 
    Request shared.ListXSSMatchSetsRequest `request:"mediaType=application/json"`
    
}

type ListXSSMatchSetsResponse struct {
    ContentType string 
    ListXSSMatchSetsResponse *shared.ListXSSMatchSetsResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    
}

