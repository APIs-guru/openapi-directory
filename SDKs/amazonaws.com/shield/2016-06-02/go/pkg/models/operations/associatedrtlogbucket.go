package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateDrtLogBucketXAmzTargetEnum string

const (
	AssociateDrtLogBucketXAmzTargetEnumAwsShield20160616AssociateDrtLogBucket AssociateDrtLogBucketXAmzTargetEnum = "AWSShield_20160616.AssociateDRTLogBucket"
)

type AssociateDrtLogBucketHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateDrtLogBucketXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateDrtLogBucketRequest struct {
	Headers AssociateDrtLogBucketHeaders
	Request shared.AssociateDrtLogBucketRequest `request:"mediaType=application/json"`
}

type AssociateDrtLogBucketResponse struct {
	AccessDeniedForDependencyException *interface{}
	AssociateDrtLogBucketResponse      map[string]interface{}
	ContentType                        string
	InternalErrorException             *interface{}
	InvalidOperationException          *interface{}
	InvalidParameterException          *interface{}
	LimitsExceededException            *interface{}
	NoAssociatedRoleException          *interface{}
	OptimisticLockException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
