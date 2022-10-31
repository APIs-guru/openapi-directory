package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResourcePolicyStatementPathParams struct {
	ResourceArn string `pathParam:"style=simple,explode=false,name=resourceArn"`
}

type CreateResourcePolicyStatementQueryParams struct {
	ExpectedRevisionID *string `queryParam:"style=form,explode=true,name=expectedRevisionId"`
}

type CreateResourcePolicyStatementHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateResourcePolicyStatementRequestBodyEffectEnum string

const (
	CreateResourcePolicyStatementRequestBodyEffectEnumAllow CreateResourcePolicyStatementRequestBodyEffectEnum = "Allow"
	CreateResourcePolicyStatementRequestBodyEffectEnumDeny  CreateResourcePolicyStatementRequestBodyEffectEnum = "Deny"
)

type CreateResourcePolicyStatementRequestBody struct {
	Action      []string                                           `json:"action"`
	Condition   map[string]map[string]string                       `json:"condition,omitempty"`
	Effect      CreateResourcePolicyStatementRequestBodyEffectEnum `json:"effect"`
	Principal   []shared.Principal                                 `json:"principal"`
	StatementID string                                             `json:"statementId"`
}

type CreateResourcePolicyStatementRequest struct {
	PathParams  CreateResourcePolicyStatementPathParams
	QueryParams CreateResourcePolicyStatementQueryParams
	Headers     CreateResourcePolicyStatementHeaders
	Request     CreateResourcePolicyStatementRequestBody `request:"mediaType=application/json"`
}

type CreateResourcePolicyStatementResponse struct {
	ConflictException                     *interface{}
	ContentType                           string
	CreateResourcePolicyStatementResponse *shared.CreateResourcePolicyStatementResponse
	InternalServerException               *interface{}
	PreconditionFailedException           *interface{}
	ResourceNotFoundException             *interface{}
	ServiceQuotaExceededException         *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
	ValidationException                   *interface{}
}
