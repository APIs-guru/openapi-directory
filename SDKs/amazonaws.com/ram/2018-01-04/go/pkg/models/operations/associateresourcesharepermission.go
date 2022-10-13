package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateResourceSharePermissionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AssociateResourceSharePermissionRequestBody struct {
	ClientToken       *string `json:"clientToken"`
	PermissionArn     string  `json:"permissionArn"`
	PermissionVersion *int64  `json:"permissionVersion"`
	Replace           *bool   `json:"replace"`
	ResourceShareArn  string  `json:"resourceShareArn"`
}

type AssociateResourceSharePermissionRequest struct {
	Headers AssociateResourceSharePermissionHeaders
	Request AssociateResourceSharePermissionRequestBody `request:"mediaType=application/json"`
}

type AssociateResourceSharePermissionResponse struct {
	AssociateResourceSharePermissionResponse *shared.AssociateResourceSharePermissionResponse
	ContentType                              string
	InvalidClientTokenException              *interface{}
	InvalidParameterException                *interface{}
	MalformedArnException                    *interface{}
	OperationNotPermittedException           *interface{}
	ServerInternalException                  *interface{}
	ServiceUnavailableException              *interface{}
	StatusCode                               int64
	UnknownResourceException                 *interface{}
}
