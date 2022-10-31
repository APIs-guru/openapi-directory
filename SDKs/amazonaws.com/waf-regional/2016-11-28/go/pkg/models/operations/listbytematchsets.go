package operations

import (
"openapi/pkg/models/shared")


type ListByteMatchSetsXAmzTargetEnum string

const (
    ListByteMatchSetsXAmzTargetEnumAwswafRegional20161128ListByteMatchSets ListByteMatchSetsXAmzTargetEnum = "AWSWAF_Regional_20161128.ListByteMatchSets"
)


type ListByteMatchSetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListByteMatchSetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListByteMatchSetsRequest struct {
    Headers ListByteMatchSetsHeaders 
    Request shared.ListByteMatchSetsRequest `request:"mediaType=application/json"`
    
}

type ListByteMatchSetsResponse struct {
    ContentType string 
    ListByteMatchSetsResponse *shared.ListByteMatchSetsResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    
}

