package operations

type DeleteCodeSigningConfigPathParams struct {
	CodeSigningConfigArn string `pathParam:"style=simple,explode=false,name=CodeSigningConfigArn"`
}

type DeleteCodeSigningConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteCodeSigningConfigRequest struct {
	PathParams DeleteCodeSigningConfigPathParams
	Headers    DeleteCodeSigningConfigHeaders
}

type DeleteCodeSigningConfigResponse struct {
	ContentType                     string
	DeleteCodeSigningConfigResponse map[string]interface{}
	InvalidParameterValueException  *interface{}
	ResourceConflictException       *interface{}
	ResourceNotFoundException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
}
