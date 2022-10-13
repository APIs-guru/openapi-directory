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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
