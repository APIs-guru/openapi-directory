package operations

import (
	"openapi/pkg/models/shared"
)

type StartEngagementXAmzTargetEnum string

const (
	StartEngagementXAmzTargetEnumSsmContactsStartEngagement StartEngagementXAmzTargetEnum = "SSMContacts.StartEngagement"
)

type StartEngagementHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartEngagementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartEngagementRequest struct {
	Headers StartEngagementHeaders
	Request shared.StartEngagementRequest `request:"mediaType=application/json"`
}

type StartEngagementResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DataEncryptionException   *interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StartEngagementResult     *shared.StartEngagementResult
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
