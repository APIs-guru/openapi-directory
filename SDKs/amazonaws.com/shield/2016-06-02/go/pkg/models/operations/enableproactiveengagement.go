package operations

type EnableProactiveEngagementXAmzTargetEnum string

const (
	EnableProactiveEngagementXAmzTargetEnumAwsShield20160616EnableProactiveEngagement EnableProactiveEngagementXAmzTargetEnum = "AWSShield_20160616.EnableProactiveEngagement"
)

type EnableProactiveEngagementHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableProactiveEngagementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnableProactiveEngagementRequest struct {
	Headers EnableProactiveEngagementHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type EnableProactiveEngagementResponse struct {
	ContentType                       string
	EnableProactiveEngagementResponse map[string]interface{}
	InternalErrorException            *interface{}
	InvalidOperationException         *interface{}
	InvalidParameterException         *interface{}
	OptimisticLockException           *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
}
