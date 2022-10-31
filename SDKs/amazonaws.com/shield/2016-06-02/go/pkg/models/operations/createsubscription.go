package operations




type CreateSubscriptionXAmzTargetEnum string

const (
    CreateSubscriptionXAmzTargetEnumAwsShield20160616CreateSubscription CreateSubscriptionXAmzTargetEnum = "AWSShield_20160616.CreateSubscription"
)


type CreateSubscriptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateSubscriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateSubscriptionRequest struct {
    Headers CreateSubscriptionHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CreateSubscriptionResponse struct {
    ContentType string 
    CreateSubscriptionResponse map[string]interface{} 
    InternalErrorException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    StatusCode int64 
    
}

