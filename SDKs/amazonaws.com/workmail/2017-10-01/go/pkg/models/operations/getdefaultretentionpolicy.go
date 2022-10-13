package operations

import (
	"openapi/pkg/models/shared"
)

type GetDefaultRetentionPolicyXAmzTargetEnum string

const (
	GetDefaultRetentionPolicyXAmzTargetEnumWorkMailServiceGetDefaultRetentionPolicy GetDefaultRetentionPolicyXAmzTargetEnum = "WorkMailService.GetDefaultRetentionPolicy"
)

type GetDefaultRetentionPolicyHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDefaultRetentionPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDefaultRetentionPolicyRequest struct {
	Headers GetDefaultRetentionPolicyHeaders
	Request shared.GetDefaultRetentionPolicyRequest `request:"mediaType=application/json"`
}

type GetDefaultRetentionPolicyResponse struct {
	ContentType                       string
	EntityNotFoundException           *interface{}
	GetDefaultRetentionPolicyResponse *shared.GetDefaultRetentionPolicyResponse
	InvalidParameterException         *interface{}
	OrganizationNotFoundException     *interface{}
	OrganizationStateException        *interface{}
	StatusCode                        int64
}
