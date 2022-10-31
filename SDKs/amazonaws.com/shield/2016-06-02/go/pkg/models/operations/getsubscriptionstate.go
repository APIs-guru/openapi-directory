package operations

import (
"openapi/pkg/models/shared")


type GetSubscriptionStateXAmzTargetEnum string

const (
    GetSubscriptionStateXAmzTargetEnumAwsShield20160616GetSubscriptionState GetSubscriptionStateXAmzTargetEnum = "AWSShield_20160616.GetSubscriptionState"
)


type GetSubscriptionStateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetSubscriptionStateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetSubscriptionStateRequest struct {
    Headers GetSubscriptionStateHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type GetSubscriptionStateResponse struct {
    ContentType string 
    GetSubscriptionStateResponse *shared.GetSubscriptionStateResponse 
    InternalErrorException *interface{} 
    StatusCode int64 
    
}

