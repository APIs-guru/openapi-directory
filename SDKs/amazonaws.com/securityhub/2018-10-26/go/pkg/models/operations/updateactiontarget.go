package operations

type UpdateActionTargetPathParams struct {
	ActionTargetArn string `pathParam:"style=simple,explode=false,name=ActionTargetArn"`
}

type UpdateActionTargetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateActionTargetRequestBody struct {
	Description *string `json:"Description,omitempty"`
	Name        *string `json:"Name,omitempty"`
}

type UpdateActionTargetRequest struct {
	PathParams UpdateActionTargetPathParams
	Headers    UpdateActionTargetHeaders
	Request    UpdateActionTargetRequestBody `request:"mediaType=application/json"`
}

type UpdateActionTargetResponse struct {
	ContentType                string
	InternalException          *interface{}
	InvalidAccessException     *interface{}
	InvalidInputException      *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	UpdateActionTargetResponse map[string]interface{}
}
