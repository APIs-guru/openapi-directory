package operations

import (
	"openapi/pkg/models/shared"
)

type GetPermissionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPermissionRequestBody struct {
	PermissionArn     string `json:"permissionArn"`
	PermissionVersion *int64 `json:"permissionVersion,omitempty"`
}

type GetPermissionRequest struct {
	Headers GetPermissionHeaders
	Request GetPermissionRequestBody `request:"mediaType=application/json"`
}

type GetPermissionResponse struct {
	ContentType                    string
	GetPermissionResponse          *shared.GetPermissionResponse
	InvalidParameterException      *interface{}
	MalformedArnException          *interface{}
	OperationNotPermittedException *interface{}
	ServerInternalException        *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	UnknownResourceException       *interface{}
}
