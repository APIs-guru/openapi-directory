package operations

import (
	"openapi/pkg/models/shared"
)

type ListDocumentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDocumentsXAmzTargetEnum string

const (
	ListDocumentsXAmzTargetEnumAmazonSsmListDocuments ListDocumentsXAmzTargetEnum = "AmazonSSM.ListDocuments"
)

type ListDocumentsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDocumentsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDocumentsRequest struct {
	QueryParams ListDocumentsQueryParams
	Headers     ListDocumentsHeaders
	Request     shared.ListDocumentsRequest `request:"mediaType=application/json"`
}

type ListDocumentsResponse struct {
	ContentType         string
	InternalServerError *interface{}
	InvalidFilterKey    *interface{}
	InvalidNextToken    *interface{}
	ListDocumentsResult *shared.ListDocumentsResult
	StatusCode          int64
}
