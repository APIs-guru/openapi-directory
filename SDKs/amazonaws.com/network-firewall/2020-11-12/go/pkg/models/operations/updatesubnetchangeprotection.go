package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSubnetChangeProtectionXAmzTargetEnum string

const (
	UpdateSubnetChangeProtectionXAmzTargetEnumNetworkFirewall20201112UpdateSubnetChangeProtection UpdateSubnetChangeProtectionXAmzTargetEnum = "NetworkFirewall_20201112.UpdateSubnetChangeProtection"
)

type UpdateSubnetChangeProtectionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateSubnetChangeProtectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
