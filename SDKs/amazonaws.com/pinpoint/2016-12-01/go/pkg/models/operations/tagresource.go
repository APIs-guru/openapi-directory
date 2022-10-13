package operations

type TagResourcePathParams struct {
	ResourceArn string `pathParam:"style=simple,explode=false,name=resource-arn"`
}

type TagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TagResourceRequestBodyTagsModel struct {
	Tags map[string]string `json:"tags"`
}

type TagResourceRequestBody struct {
	TagsModel TagResourceRequestBodyTagsModel `json:"TagsModel"`
}

type TagResourceRequest struct {
	PathParams TagResourcePathParams
	Headers    TagResourceHeaders
	Request    TagResourceRequestBody `request:"mediaType=application/json"`
}

type TagResourceResponse struct {
	ContentType string
	StatusCode  int64
}
