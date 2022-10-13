package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRetentionPolicyXAmzTargetEnum string

const (
	DeleteRetentionPolicyXAmzTargetEnumWorkMailServiceDeleteRetentionPolicy DeleteRetentionPolicyXAmzTargetEnum = "WorkMailService.DeleteRetentionPolicy"
)

type DeleteRetentionPolicyHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRetentionPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRetentionPolicyRequest struct {
	Headers DeleteRetentionPolicyHeaders
	Request shared.DeleteRetentionPolicyRequest `request:"mediaType=application/json"`
}

type DeleteRetentionPolicyResponse struct {
	ContentType                   string
	DeleteRetentionPolicyResponse map[string]interface{}
	InvalidParameterException     *interface{}
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StatusCode                    int64
}
