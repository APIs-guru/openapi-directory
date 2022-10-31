package operations

import (
	"openapi/pkg/models/shared"
)

type GetStatementResultQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetStatementResultXAmzTargetEnum string

const (
	GetStatementResultXAmzTargetEnumRedshiftDataGetStatementResult GetStatementResultXAmzTargetEnum = "RedshiftData.GetStatementResult"
)

type GetStatementResultHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetStatementResultXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetStatementResultRequest struct {
	QueryParams GetStatementResultQueryParams
	Headers     GetStatementResultHeaders
	Request     shared.GetStatementResultRequest `request:"mediaType=application/json"`
}

type GetStatementResultResponse struct {
	ContentType                string
	GetStatementResultResponse *shared.GetStatementResultResponse
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
