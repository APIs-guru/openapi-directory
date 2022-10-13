package operations

type UntagResourceQueryParams struct {
	ResourceArn string   `queryParam:"style=form,explode=true,name=ResourceArn"`
	TagKeys     []string `queryParam:"style=form,explode=true,name=TagKeys"`
}

type UntagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UntagResourceRequest struct {
	QueryParams UntagResourceQueryParams
	Headers     UntagResourceHeaders
}

type UntagResourceResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	NotFoundException               *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
	UntagResourceResponse           map[string]interface{}
}
