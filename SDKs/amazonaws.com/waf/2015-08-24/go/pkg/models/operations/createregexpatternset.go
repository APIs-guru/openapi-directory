package operations

import (
"openapi/pkg/models/shared")


type CreateRegexPatternSetXAmzTargetEnum string

const (
    CreateRegexPatternSetXAmzTargetEnumAwswaf20150824CreateRegexPatternSet CreateRegexPatternSetXAmzTargetEnum = "AWSWAF_20150824.CreateRegexPatternSet"
)


type CreateRegexPatternSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateRegexPatternSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateRegexPatternSetRequest struct {
    Headers CreateRegexPatternSetHeaders 
    Request shared.CreateRegexPatternSetRequest `request:"mediaType=application/json"`
    
}

type CreateRegexPatternSetResponse struct {
    ContentType string 
    CreateRegexPatternSetResponse *shared.CreateRegexPatternSetResponse 
    StatusCode int64 
    WafDisallowedNameException *interface{} 
    WafInternalErrorException *interface{} 
    WafLimitsExceededException *interface{} 
    WafStaleDataException *interface{} 
    
}

