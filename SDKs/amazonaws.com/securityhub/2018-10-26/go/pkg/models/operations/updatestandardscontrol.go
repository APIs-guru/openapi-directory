package operations

type UpdateStandardsControlPathParams struct {
	StandardsControlArn string `pathParam:"style=simple,explode=false,name=StandardsControlArn"`
}

type UpdateStandardsControlHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateStandardsControlRequestBodyControlStatusEnum string

const (
	UpdateStandardsControlRequestBodyControlStatusEnumEnabled  UpdateStandardsControlRequestBodyControlStatusEnum = "ENABLED"
	UpdateStandardsControlRequestBodyControlStatusEnumDisabled UpdateStandardsControlRequestBodyControlStatusEnum = "DISABLED"
)

type UpdateStandardsControlRequestBody struct {
	ControlStatus  *UpdateStandardsControlRequestBodyControlStatusEnum `json:"ControlStatus"`
	DisabledReason *string                                             `json:"DisabledReason"`
}

type UpdateStandardsControlRequest struct {
	PathParams UpdateStandardsControlPathParams
	Headers    UpdateStandardsControlHeaders
	Request    UpdateStandardsControlRequestBody `request:"mediaType=application/json"`
}

type UpdateStandardsControlResponse struct {
	ContentType                    string
	InternalException              *interface{}
	InvalidAccessException         *interface{}
	InvalidInputException          *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	UpdateStandardsControlResponse map[string]interface{}
}
