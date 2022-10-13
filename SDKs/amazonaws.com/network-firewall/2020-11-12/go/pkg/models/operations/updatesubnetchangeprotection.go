package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSubnetChangeProtectionXAmzTargetEnum string

const (
	UpdateSubnetChangeProtectionXAmzTargetEnumNetworkFirewall20201112UpdateSubnetChangeProtection UpdateSubnetChangeProtectionXAmzTargetEnum = "NetworkFirewall_20201112.UpdateSubnetChangeProtection"
)

type UpdateSubnetChangeProtectionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateSubnetChangeProtectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateSubnetChangeProtectionRequest struct {
	Headers UpdateSubnetChangeProtectionHeaders
	Request shared.UpdateSubnetChangeProtectionRequest `request:"mediaType=application/json"`
}

type UpdateSubnetChangeProtectionResponse struct {
	ContentType                          string
	InternalServerError                  *interface{}
	InvalidRequestException              *interface{}
	InvalidTokenException                *interface{}
	ResourceNotFoundException            *interface{}
	ResourceOwnerCheckException          *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
	UpdateSubnetChangeProtectionResponse *shared.UpdateSubnetChangeProtectionResponse
}
