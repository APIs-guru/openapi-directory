package operations

import (
	"openapi/pkg/models/shared"
)

type PutResourcePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutResourcePolicyRequestBody struct {
	Policy      string `json:"policy"`
	ResourceArn string `json:"resourceArn"`
}

type PutResourcePolicyRequest struct {
	Headers PutResourcePolicyHeaders
	Request PutResourcePolicyRequestBody `request:"mediaType=application/json"`
}

type PutResourcePolicyResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	PutResourcePolicyOutput   *shared.PutResourcePolicyOutput
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
