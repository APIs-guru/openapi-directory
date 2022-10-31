package operations

type UntagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UntagResourceRequestBody struct {
	ResourceShareArn string   `json:"resourceShareArn"`
	TagKeys          []string `json:"tagKeys"`
}

type UntagResourceRequest struct {
	Headers UntagResourceHeaders
	Request UntagResourceRequestBody `request:"mediaType=application/json"`
}

type UntagResourceResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	ServerInternalException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	UntagResourceResponse       map[string]interface{}
}
