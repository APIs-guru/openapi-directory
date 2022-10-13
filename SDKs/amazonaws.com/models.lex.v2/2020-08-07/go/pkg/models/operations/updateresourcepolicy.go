package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResourcePolicyPathParams struct {
	ResourceArn string `pathParam:"style=simple,explode=false,name=resourceArn"`
}

type UpdateResourcePolicyQueryParams struct {
	ExpectedRevisionID *string `queryParam:"style=form,explode=true,name=expectedRevisionId"`
}

type UpdateResourcePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateResourcePolicyRequestBody struct {
	Policy string `json:"policy"`
}

type UpdateResourcePolicyRequest struct {
	PathParams  UpdateResourcePolicyPathParams
	QueryParams UpdateResourcePolicyQueryParams
	Headers     UpdateResourcePolicyHeaders
	Request     UpdateResourcePolicyRequestBody `request:"mediaType=application/json"`
}

type UpdateResourcePolicyResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateResourcePolicyResponse  *shared.UpdateResourcePolicyResponse
	ValidationException           *interface{}
}
