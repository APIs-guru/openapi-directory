package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateResourceSharePermissionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisassociateResourceSharePermissionRequestBody struct {
	ClientToken      *string `json:"clientToken"`
	PermissionArn    string  `json:"permissionArn"`
	ResourceShareArn string  `json:"resourceShareArn"`
}

type DisassociateResourceSharePermissionRequest struct {
	Headers DisassociateResourceSharePermissionHeaders
	Request DisassociateResourceSharePermissionRequestBody `request:"mediaType=application/json"`
}

type DisassociateResourceSharePermissionResponse struct {
	ContentType                                 string
	DisassociateResourceSharePermissionResponse *shared.DisassociateResourceSharePermissionResponse
	InvalidClientTokenException                 *interface{}
	InvalidParameterException                   *interface{}
	InvalidStateTransitionException             *interface{}
	MalformedArnException                       *interface{}
	OperationNotPermittedException              *interface{}
	ServerInternalException                     *interface{}
	ServiceUnavailableException                 *interface{}
	StatusCode                                  int64
	UnknownResourceException                    *interface{}
}
