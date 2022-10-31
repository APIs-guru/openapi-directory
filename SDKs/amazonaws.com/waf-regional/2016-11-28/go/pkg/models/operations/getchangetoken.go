package operations

import (
"openapi/pkg/models/shared")


type GetChangeTokenXAmzTargetEnum string

const (
    GetChangeTokenXAmzTargetEnumAwswafRegional20161128GetChangeToken GetChangeTokenXAmzTargetEnum = "AWSWAF_Regional_20161128.GetChangeToken"
)


type GetChangeTokenHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetChangeTokenXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetChangeTokenRequest struct {
    Headers GetChangeTokenHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type GetChangeTokenResponse struct {
    ContentType string 
    GetChangeTokenResponse *shared.GetChangeTokenResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    
}

