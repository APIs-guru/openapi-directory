package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateProactiveEngagementDetailsXAmzTargetEnum string

const (
	AssociateProactiveEngagementDetailsXAmzTargetEnumAwsShield20160616AssociateProactiveEngagementDetails AssociateProactiveEngagementDetailsXAmzTargetEnum = "AWSShield_20160616.AssociateProactiveEngagementDetails"
)

type AssociateProactiveEngagementDetailsHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateProactiveEngagementDetailsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateProactiveEngagementDetailsRequest struct {
	Headers AssociateProactiveEngagementDetailsHeaders
	Request shared.AssociateProactiveEngagementDetailsRequest `request:"mediaType=application/json"`
}

type AssociateProactiveEngagementDetailsResponse struct {
	AssociateProactiveEngagementDetailsResponse map[string]interface{}
	ContentType                                 string
	InternalErrorException                      *interface{}
	InvalidOperationException                   *interface{}
	InvalidParameterException                   *interface{}
	OptimisticLockException                     *interface{}
	ResourceNotFoundException                   *interface{}
	StatusCode                                  int64
}
