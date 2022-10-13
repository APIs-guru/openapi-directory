package operations

import (
	"openapi/pkg/models/shared"
)

type ListDocumentMetadataHistoryXAmzTargetEnum string

const (
	ListDocumentMetadataHistoryXAmzTargetEnumAmazonSsmListDocumentMetadataHistory ListDocumentMetadataHistoryXAmzTargetEnum = "AmazonSSM.ListDocumentMetadataHistory"
)

type ListDocumentMetadataHistoryHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDocumentMetadataHistoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDocumentMetadataHistoryRequest struct {
	Headers ListDocumentMetadataHistoryHeaders
	Request shared.ListDocumentMetadataHistoryRequest `request:"mediaType=application/json"`
}

type ListDocumentMetadataHistoryResponse struct {
	ContentType                         string
	InternalServerError                 *interface{}
	InvalidDocument                     *interface{}
	InvalidDocumentVersion              *interface{}
	InvalidNextToken                    *interface{}
	ListDocumentMetadataHistoryResponse *shared.ListDocumentMetadataHistoryResponse
	StatusCode                          int64
}
