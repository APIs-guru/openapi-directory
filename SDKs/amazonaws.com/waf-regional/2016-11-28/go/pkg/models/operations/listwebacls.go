package operations

import (
"openapi/pkg/models/shared")


type ListWebAcLsXAmzTargetEnum string

const (
    ListWebAcLsXAmzTargetEnumAwswafRegional20161128ListWebAcLs ListWebAcLsXAmzTargetEnum = "AWSWAF_Regional_20161128.ListWebACLs"
)


type ListWebAcLsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListWebAcLsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListWebAcLsRequest struct {
    Headers ListWebAcLsHeaders 
    Request shared.ListWebAcLsRequest `request:"mediaType=application/json"`
    
}

type ListWebAcLsResponse struct {
    ContentType string 
    ListWebAcLsResponse *shared.ListWebAcLsResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    
}

