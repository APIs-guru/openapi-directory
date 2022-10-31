package operations

import (
"openapi/pkg/models/shared")


type GetHomeRegionXAmzTargetEnum string

const (
    GetHomeRegionXAmzTargetEnumAwsMigrationHubMultiAccountServiceGetHomeRegion GetHomeRegionXAmzTargetEnum = "AWSMigrationHubMultiAccountService.GetHomeRegion"
)


type GetHomeRegionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetHomeRegionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetHomeRegionRequest struct {
    Headers GetHomeRegionHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type GetHomeRegionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetHomeRegionResult *shared.GetHomeRegionResult 
    InternalServerError *interface{} 
    InvalidInputException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

