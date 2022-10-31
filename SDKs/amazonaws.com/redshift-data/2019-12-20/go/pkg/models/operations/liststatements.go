package operations

import (
	"openapi/pkg/models/shared"
)

type ListStatementsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListStatementsXAmzTargetEnum string

const (
	ListStatementsXAmzTargetEnumRedshiftDataListStatements ListStatementsXAmzTargetEnum = "RedshiftData.ListStatements"
)

type ListStatementsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListStatementsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListStatementsRequest struct {
	QueryParams ListStatementsQueryParams
	Headers     ListStatementsHeaders
	Request     shared.ListStatementsRequest `request:"mediaType=application/json"`
}

type ListStatementsResponse struct {
	ContentType             string
	InternalServerException *interface{}
	ListStatementsResponse  *shared.ListStatementsResponse
	StatusCode              int64
	ValidationException     *interface{}
}
