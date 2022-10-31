package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateDrtLogBucketXAmzTargetEnum string

const (
	DisassociateDrtLogBucketXAmzTargetEnumAwsShield20160616DisassociateDrtLogBucket DisassociateDrtLogBucketXAmzTargetEnum = "AWSShield_20160616.DisassociateDRTLogBucket"
)

type DisassociateDrtLogBucketHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateDrtLogBucketXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisassociateDrtLogBucketRequest struct {
	Headers DisassociateDrtLogBucketHeaders
	Request shared.DisassociateDrtLogBucketRequest `request:"mediaType=application/json"`
}

type DisassociateDrtLogBucketResponse struct {
	AccessDeniedForDependencyException *interface{}
	ContentType                        string
	DisassociateDrtLogBucketResponse   map[string]interface{}
	InternalErrorException             *interface{}
	InvalidOperationException          *interface{}
	NoAssociatedRoleException          *interface{}
	OptimisticLockException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
