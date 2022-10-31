package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourcePolicyXAmzTargetEnum string

const (
	DeleteResourcePolicyXAmzTargetEnumNetworkFirewall20201112DeleteResourcePolicy DeleteResourcePolicyXAmzTargetEnum = "NetworkFirewall_20201112.DeleteResourcePolicy"
)

type DeleteResourcePolicyHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteResourcePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteResourcePolicyRequest struct {
	Headers DeleteResourcePolicyHeaders
	Request shared.DeleteResourcePolicyRequest `request:"mediaType=application/json"`
}

type DeleteResourcePolicyResponse struct {
	ContentType                  string
	DeleteResourcePolicyResponse map[string]interface{}
	InternalServerError          *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
