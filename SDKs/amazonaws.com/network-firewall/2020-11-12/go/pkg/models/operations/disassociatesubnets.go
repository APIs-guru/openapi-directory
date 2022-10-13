package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateSubnetsXAmzTargetEnum string

const (
	DisassociateSubnetsXAmzTargetEnumNetworkFirewall20201112DisassociateSubnets DisassociateSubnetsXAmzTargetEnum = "NetworkFirewall_20201112.DisassociateSubnets"
)

type DisassociateSubnetsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateSubnetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateSubnetsRequest struct {
	Headers DisassociateSubnetsHeaders
	Request shared.DisassociateSubnetsRequest `request:"mediaType=application/json"`
}

type DisassociateSubnetsResponse struct {
	ContentType                 string
	DisassociateSubnetsResponse *shared.DisassociateSubnetsResponse
	InternalServerError         *interface{}
	InvalidOperationException   *interface{}
	InvalidRequestException     *interface{}
	InvalidTokenException       *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
