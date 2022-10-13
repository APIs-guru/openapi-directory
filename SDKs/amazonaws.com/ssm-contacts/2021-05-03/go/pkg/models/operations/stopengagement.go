package operations

import (
	"openapi/pkg/models/shared"
)

type StopEngagementXAmzTargetEnum string

const (
	StopEngagementXAmzTargetEnumSsmContactsStopEngagement StopEngagementXAmzTargetEnum = "SSMContacts.StopEngagement"
)

type StopEngagementHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopEngagementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopEngagementRequest struct {
	Headers StopEngagementHeaders
	Request shared.StopEngagementRequest `request:"mediaType=application/json"`
}

type StopEngagementResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	StopEngagementResult      map[string]interface{}
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
