package operations

type DeleteResourcePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
