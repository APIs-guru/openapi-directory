package operations

import (
"openapi/pkg/models/shared")


type GetJobUnlockCodeXAmzTargetEnum string

const (
    GetJobUnlockCodeXAmzTargetEnumAwsieSnowballJobManagementServiceGetJobUnlockCode GetJobUnlockCodeXAmzTargetEnum = "AWSIESnowballJobManagementService.GetJobUnlockCode"
)


type GetJobUnlockCodeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetJobUnlockCodeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetJobUnlockCodeRequest struct {
    Headers GetJobUnlockCodeHeaders 
    Request shared.GetJobUnlockCodeRequest `request:"mediaType=application/json"`
    
}

type GetJobUnlockCodeResponse struct {
    ContentType string 
    GetJobUnlockCodeResult *shared.GetJobUnlockCodeResult 
    InvalidJobStateException *interface{} 
    InvalidResourceException *interface{} 
    StatusCode int64 
    
}

