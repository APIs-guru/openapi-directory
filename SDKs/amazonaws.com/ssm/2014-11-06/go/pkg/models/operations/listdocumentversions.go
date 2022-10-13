package operations

import (
	"openapi/pkg/models/shared"
)

type ListDocumentVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDocumentVersionsXAmzTargetEnum string

const (
	ListDocumentVersionsXAmzTargetEnumAmazonSsmListDocumentVersions ListDocumentVersionsXAmzTargetEnum = "AmazonSSM.ListDocumentVersions"
)

type ListDocumentVersionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDocumentVersionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDocumentVersionsRequest struct {
	QueryParams ListDocumentVersionsQueryParams
	Headers     ListDocumentVersionsHeaders
	Request     shared.ListDocumentVersionsRequest `request:"mediaType=application/json"`
}

type ListDocumentVersionsResponse struct {
	ContentType                string
	InternalServerError        *interface{}
	InvalidDocument            *interface{}
	InvalidNextToken           *interface{}
	ListDocumentVersionsResult *shared.ListDocumentVersionsResult
	StatusCode                 int64
}
