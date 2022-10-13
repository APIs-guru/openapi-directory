package operations

type DeleteWorkloadPathParams struct {
	WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
}

type DeleteWorkloadQueryParams struct {
	ClientRequestToken string `queryParam:"style=form,explode=true,name=ClientRequestToken"`
}

type DeleteWorkloadHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteWorkloadRequest struct {
	PathParams  DeleteWorkloadPathParams
	QueryParams DeleteWorkloadQueryParams
	Headers     DeleteWorkloadHeaders
}

type DeleteWorkloadResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
