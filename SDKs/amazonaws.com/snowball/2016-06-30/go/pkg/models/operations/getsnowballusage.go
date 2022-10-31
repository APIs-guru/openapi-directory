package operations

import (
"openapi/pkg/models/shared")


type GetSnowballUsageXAmzTargetEnum string

const (
    GetSnowballUsageXAmzTargetEnumAwsieSnowballJobManagementServiceGetSnowballUsage GetSnowballUsageXAmzTargetEnum = "AWSIESnowballJobManagementService.GetSnowballUsage"
)


type GetSnowballUsageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetSnowballUsageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetSnowballUsageRequest struct {
    Headers GetSnowballUsageHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type GetSnowballUsageResponse struct {
    ContentType string 
    GetSnowballUsageResult *shared.GetSnowballUsageResult 
    StatusCode int64 
    
}

