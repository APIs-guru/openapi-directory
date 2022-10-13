package operations

type DeletePlaceIndexPathParams struct {
	IndexName string `pathParam:"style=simple,explode=false,name=IndexName"`
}

type DeletePlaceIndexHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeletePlaceIndexRequest struct {
	PathParams DeletePlaceIndexPathParams
	Headers    DeletePlaceIndexHeaders
}

type DeletePlaceIndexResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DeletePlaceIndexResponse  map[string]interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
