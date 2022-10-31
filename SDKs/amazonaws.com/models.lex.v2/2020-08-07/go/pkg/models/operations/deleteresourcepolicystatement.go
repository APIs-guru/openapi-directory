package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourcePolicyStatementPathParams struct {
	ResourceArn string `pathParam:"style=simple,explode=false,name=resourceArn"`
	StatementID string `pathParam:"style=simple,explode=false,name=statementId"`
}

type DeleteResourcePolicyStatementQueryParams struct {
	ExpectedRevisionID *string `queryParam:"style=form,explode=true,name=expectedRevisionId"`
}

type DeleteResourcePolicyStatementHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteResourcePolicyStatementRequest struct {
	PathParams  DeleteResourcePolicyStatementPathParams
	QueryParams DeleteResourcePolicyStatementQueryParams
	Headers     DeleteResourcePolicyStatementHeaders
}

type DeleteResourcePolicyStatementResponse struct {
	ContentType                           string
	DeleteResourcePolicyStatementResponse *shared.DeleteResourcePolicyStatementResponse
	InternalServerException               *interface{}
	PreconditionFailedException           *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
}
