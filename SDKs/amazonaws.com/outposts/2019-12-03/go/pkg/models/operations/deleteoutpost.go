package operations

type DeleteOutpostPathParams struct {
	OutpostID string `pathParam:"style=simple,explode=false,name=OutpostId"`
}

type DeleteOutpostHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
