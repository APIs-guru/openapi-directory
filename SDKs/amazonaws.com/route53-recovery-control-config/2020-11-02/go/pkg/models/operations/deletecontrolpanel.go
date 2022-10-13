package operations

type DeleteControlPanelPathParams struct {
	ControlPanelArn string `pathParam:"style=simple,explode=false,name=ControlPanelArn"`
}

type DeleteControlPanelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteControlPanelRequest struct {
	PathParams DeleteControlPanelPathParams
	Headers    DeleteControlPanelHeaders
}

type DeleteControlPanelResponse struct {
	AccessDeniedException      *interface{}
	ConflictException          *interface{}
	ContentType                string
	DeleteControlPanelResponse map[string]interface{}
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
