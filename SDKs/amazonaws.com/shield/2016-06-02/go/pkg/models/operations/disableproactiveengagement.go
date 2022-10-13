package operations

type DisableProactiveEngagementXAmzTargetEnum string

const (
	DisableProactiveEngagementXAmzTargetEnumAwsShield20160616DisableProactiveEngagement DisableProactiveEngagementXAmzTargetEnum = "AWSShield_20160616.DisableProactiveEngagement"
)

type DisableProactiveEngagementHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableProactiveEngagementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisableProactiveEngagementRequest struct {
	Headers DisableProactiveEngagementHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DisableProactiveEngagementResponse struct {
	ContentType                        string
	DisableProactiveEngagementResponse map[string]interface{}
	InternalErrorException             *interface{}
	InvalidOperationException          *interface{}
	InvalidParameterException          *interface{}
	OptimisticLockException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
