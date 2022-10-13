package operations

type DeleteSubscriptionXAmzTargetEnum string

const (
	DeleteSubscriptionXAmzTargetEnumAwsShield20160616DeleteSubscription DeleteSubscriptionXAmzTargetEnum = "AWSShield_20160616.DeleteSubscription"
)

type DeleteSubscriptionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSubscriptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteSubscriptionRequest struct {
	Headers DeleteSubscriptionHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DeleteSubscriptionResponse struct {
	ContentType                 string
	DeleteSubscriptionResponse  map[string]interface{}
	InternalErrorException      *interface{}
	LockedSubscriptionException *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
