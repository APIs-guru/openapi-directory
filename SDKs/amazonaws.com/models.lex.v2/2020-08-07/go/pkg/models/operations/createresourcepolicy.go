package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResourcePolicyPathParams struct {
	ResourceArn string `pathParam:"style=simple,explode=false,name=resourceArn"`
}

type CreateResourcePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateResourcePolicyRequestBody struct {
	Policy string `json:"policy"`
}

type CreateResourcePolicyRequest struct {
	PathParams CreateResourcePolicyPathParams
	Headers    CreateResourcePolicyHeaders
	Request    CreateResourcePolicyRequestBody `request:"mediaType=application/json"`
}

type CreateResourcePolicyResponse struct {
	ContentType                   string
	CreateResourcePolicyResponse  *shared.CreateResourcePolicyResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
