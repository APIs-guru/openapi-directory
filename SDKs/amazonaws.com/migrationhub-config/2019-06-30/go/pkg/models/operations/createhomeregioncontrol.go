package operations

import (
"openapi/pkg/models/shared")


type CreateHomeRegionControlXAmzTargetEnum string

const (
    CreateHomeRegionControlXAmzTargetEnumAwsMigrationHubMultiAccountServiceCreateHomeRegionControl CreateHomeRegionControlXAmzTargetEnum = "AWSMigrationHubMultiAccountService.CreateHomeRegionControl"
)


type CreateHomeRegionControlHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateHomeRegionControlXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateHomeRegionControlRequest struct {
    Headers CreateHomeRegionControlHeaders 
    Request shared.CreateHomeRegionControlRequest `request:"mediaType=application/json"`
    
}

type CreateHomeRegionControlResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateHomeRegionControlResult *shared.CreateHomeRegionControlResult 
    DryRunOperation *interface{} 
    InternalServerError *interface{} 
    InvalidInputException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

