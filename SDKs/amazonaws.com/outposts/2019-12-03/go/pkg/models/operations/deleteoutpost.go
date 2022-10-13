package operations

type DeleteOutpostPathParams struct {
	OutpostID string `pathParam:"style=simple,explode=false,name=OutpostId"`
}

type DeleteOutpostHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteOutpostRequest struct {
	PathParams DeleteOutpostPathParams
	Headers    DeleteOutpostHeaders
}

type DeleteOutpostResponse struct {
	AccessDeniedException   *interface{}
	ConflictException       *interface{}
	ContentType             string
	DeleteOutpostOutput     map[string]interface{}
	InternalServerException *interface{}
	NotFoundException       *interface{}
	StatusCode              int64
	ValidationException     *interface{}
}
