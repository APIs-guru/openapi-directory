package operations




type DeleteSubscriptionXAmzTargetEnum string

const (
    DeleteSubscriptionXAmzTargetEnumAwsShield20160616DeleteSubscription DeleteSubscriptionXAmzTargetEnum = "AWSShield_20160616.DeleteSubscription"
)


type DeleteSubscriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteSubscriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteSubscriptionRequest struct {
    Headers DeleteSubscriptionHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type DeleteSubscriptionResponse struct {
    ContentType string 
    DeleteSubscriptionResponse map[string]interface{} 
    InternalErrorException *interface{} 
    LockedSubscriptionException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

