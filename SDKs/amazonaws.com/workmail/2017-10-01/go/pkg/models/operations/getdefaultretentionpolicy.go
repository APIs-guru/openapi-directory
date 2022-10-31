package operations

import (
	"openapi/pkg/models/shared"
)

type GetDefaultRetentionPolicyXAmzTargetEnum string

const (
	GetDefaultRetentionPolicyXAmzTargetEnumWorkMailServiceGetDefaultRetentionPolicy GetDefaultRetentionPolicyXAmzTargetEnum = "WorkMailService.GetDefaultRetentionPolicy"
)

type GetDefaultRetentionPolicyHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDefaultRetentionPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
