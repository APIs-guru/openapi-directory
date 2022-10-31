package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSubscriptionXAmzTargetEnum string

const (
	UpdateSubscriptionXAmzTargetEnumAwsShield20160616UpdateSubscription UpdateSubscriptionXAmzTargetEnum = "AWSShield_20160616.UpdateSubscription"
)

type UpdateSubscriptionHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateSubscriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateSubscriptionRequest struct {
	Headers UpdateSubscriptionHeaders
	Request shared.UpdateSubscriptionRequest `request:"mediaType=application/json"`
}

type UpdateSubscriptionResponse struct {
	ContentType                 string
	InternalErrorException      *interface{}
	InvalidParameterException   *interface{}
	LockedSubscriptionException *interface{}
	OptimisticLockException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	UpdateSubscriptionResponse  map[string]interface{}
}
