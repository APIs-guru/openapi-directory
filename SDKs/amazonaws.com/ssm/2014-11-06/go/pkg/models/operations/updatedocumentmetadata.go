package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDocumentMetadataXAmzTargetEnum string

const (
	UpdateDocumentMetadataXAmzTargetEnumAmazonSsmUpdateDocumentMetadata UpdateDocumentMetadataXAmzTargetEnum = "AmazonSSM.UpdateDocumentMetadata"
)

type UpdateDocumentMetadataHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDocumentMetadataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDocumentMetadataRequest struct {
	Headers UpdateDocumentMetadataHeaders
	Request shared.UpdateDocumentMetadataRequest `request:"mediaType=application/json"`
}

type UpdateDocumentMetadataResponse struct {
	ContentType                    string
	InternalServerError            *interface{}
	InvalidDocument                *interface{}
	InvalidDocumentOperation       *interface{}
	InvalidDocumentVersion         *interface{}
	StatusCode                     int64
	UpdateDocumentMetadataResponse map[string]interface{}
}
