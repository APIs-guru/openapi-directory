package operations

type DeleteReplicationSetQueryParams struct {
	Arn string `queryParam:"style=form,explode=true,name=arn"`
}

type DeleteReplicationSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteReplicationSetRequest struct {
	QueryParams DeleteReplicationSetQueryParams
	Headers     DeleteReplicationSetHeaders
}

type DeleteReplicationSetResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	DeleteReplicationSetOutput map[string]interface{}
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
