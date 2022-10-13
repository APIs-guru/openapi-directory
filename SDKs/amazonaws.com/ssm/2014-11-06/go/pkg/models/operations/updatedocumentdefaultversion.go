package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDocumentDefaultVersionXAmzTargetEnum string

const (
	UpdateDocumentDefaultVersionXAmzTargetEnumAmazonSsmUpdateDocumentDefaultVersion UpdateDocumentDefaultVersionXAmzTargetEnum = "AmazonSSM.UpdateDocumentDefaultVersion"
)

type UpdateDocumentDefaultVersionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDocumentDefaultVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDocumentDefaultVersionRequest struct {
	Headers UpdateDocumentDefaultVersionHeaders
	Request shared.UpdateDocumentDefaultVersionRequest `request:"mediaType=application/json"`
}

type UpdateDocumentDefaultVersionResponse struct {
	ContentType                        string
	InternalServerError                *interface{}
	InvalidDocument                    *interface{}
	InvalidDocumentSchemaVersion       *interface{}
	InvalidDocumentVersion             *interface{}
	StatusCode                         int64
	UpdateDocumentDefaultVersionResult *shared.UpdateDocumentDefaultVersionResult
}
