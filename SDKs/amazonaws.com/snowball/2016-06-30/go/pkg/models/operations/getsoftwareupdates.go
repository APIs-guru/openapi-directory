package operations

import (
"openapi/pkg/models/shared")


type GetSoftwareUpdatesXAmzTargetEnum string

const (
    GetSoftwareUpdatesXAmzTargetEnumAwsieSnowballJobManagementServiceGetSoftwareUpdates GetSoftwareUpdatesXAmzTargetEnum = "AWSIESnowballJobManagementService.GetSoftwareUpdates"
)


type GetSoftwareUpdatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetSoftwareUpdatesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetSoftwareUpdatesRequest struct {
    Headers GetSoftwareUpdatesHeaders 
    Request shared.GetSoftwareUpdatesRequest `request:"mediaType=application/json"`
    
}

type GetSoftwareUpdatesResponse struct {
    ContentType string 
    GetSoftwareUpdatesResult *shared.GetSoftwareUpdatesResult 
    InvalidJobStateException *interface{} 
    InvalidResourceException *interface{} 
    StatusCode int64 
    
}

