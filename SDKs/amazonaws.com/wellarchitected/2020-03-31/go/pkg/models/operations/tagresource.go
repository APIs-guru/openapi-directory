package operations

type TagResourcePathParams struct {
	WorkloadArn string `pathParam:"style=simple,explode=false,name=WorkloadArn"`
}

type TagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type TagResourceRequestBody struct {
	Tags map[string]string `json:"Tags"`
}

type TagResourceRequest struct {
	PathParams TagResourcePathParams
	Headers    TagResourceHeaders
	Request    TagResourceRequestBody `request:"mediaType=application/json"`
}

type TagResourceResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TagResourceOutput         map[string]interface{}
}
