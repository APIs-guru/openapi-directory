package operations

type DeleteResourcePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteResourcePolicyRequestBody struct {
	PolicyID    string `json:"policyId"`
	ResourceArn string `json:"resourceArn"`
}

type DeleteResourcePolicyRequest struct {
	Headers DeleteResourcePolicyHeaders
	Request DeleteResourcePolicyRequestBody `request:"mediaType=application/json"`
}

type DeleteResourcePolicyResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	DeleteResourcePolicyOutput map[string]interface{}
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
