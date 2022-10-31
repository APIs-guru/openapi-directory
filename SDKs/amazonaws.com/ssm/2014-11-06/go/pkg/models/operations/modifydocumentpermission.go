package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyDocumentPermissionXAmzTargetEnum string

const (
	ModifyDocumentPermissionXAmzTargetEnumAmazonSsmModifyDocumentPermission ModifyDocumentPermissionXAmzTargetEnum = "AmazonSSM.ModifyDocumentPermission"
)

type ModifyDocumentPermissionHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyDocumentPermissionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
