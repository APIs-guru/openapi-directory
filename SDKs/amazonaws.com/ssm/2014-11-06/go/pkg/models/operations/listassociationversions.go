package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssociationVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAssociationVersionsXAmzTargetEnum string

const (
	ListAssociationVersionsXAmzTargetEnumAmazonSsmListAssociationVersions ListAssociationVersionsXAmzTargetEnum = "AmazonSSM.ListAssociationVersions"
)

type ListAssociationVersionsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssociationVersionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAssociationVersionsRequest struct {
	QueryParams ListAssociationVersionsQueryParams
	Headers     ListAssociationVersionsHeaders
	Request     shared.ListAssociationVersionsRequest `request:"mediaType=application/json"`
}

type ListAssociationVersionsResponse struct {
	AssociationDoesNotExist       *interface{}
	ContentType                   string
	InternalServerError           *interface{}
	InvalidNextToken              *interface{}
	ListAssociationVersionsResult *shared.ListAssociationVersionsResult
	StatusCode                    int64
}
