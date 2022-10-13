package operations

type CreateSubscriptionXAmzTargetEnum string

const (
	CreateSubscriptionXAmzTargetEnumAwsShield20160616CreateSubscription CreateSubscriptionXAmzTargetEnum = "AWSShield_20160616.CreateSubscription"
)

type CreateSubscriptionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateSubscriptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateSubscriptionRequest struct {
	Headers CreateSubscriptionHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type CreateSubscriptionResponse struct {
	ContentType                    string
	CreateSubscriptionResponse     map[string]interface{}
	InternalErrorException         *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
}
