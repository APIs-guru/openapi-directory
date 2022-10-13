package operations

type UntagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UntagResourceRequestBody struct {
	ResourceArn string   `json:"ResourceARN"`
	TagKeys     []string `json:"TagKeys"`
}

type UntagResourceRequest struct {
	Headers UntagResourceHeaders
	Request UntagResourceRequestBody `request:"mediaType=application/json"`
}

type UntagResourceResponse struct {
	ContentType               string
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottledException        *interface{}
	UntagResourceResponse     map[string]interface{}
}
