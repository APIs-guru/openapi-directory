package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyDocumentPermissionXAmzTargetEnum string

const (
	ModifyDocumentPermissionXAmzTargetEnumAmazonSsmModifyDocumentPermission ModifyDocumentPermissionXAmzTargetEnum = "AmazonSSM.ModifyDocumentPermission"
)

type ModifyDocumentPermissionHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyDocumentPermissionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyDocumentPermissionRequest struct {
	Headers ModifyDocumentPermissionHeaders
	Request shared.ModifyDocumentPermissionRequest `request:"mediaType=application/json"`
}

type ModifyDocumentPermissionResponse struct {
	ContentType                      string
	DocumentLimitExceeded            *interface{}
	DocumentPermissionLimit          *interface{}
	InternalServerError              *interface{}
	InvalidDocument                  *interface{}
	InvalidPermissionType            *interface{}
	ModifyDocumentPermissionResponse map[string]interface{}
	StatusCode                       int64
}
