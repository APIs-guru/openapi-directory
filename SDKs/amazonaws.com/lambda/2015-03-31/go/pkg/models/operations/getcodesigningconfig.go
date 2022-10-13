package operations

import (
	"openapi/pkg/models/shared"
)

type GetCodeSigningConfigPathParams struct {
	CodeSigningConfigArn string `pathParam:"style=simple,explode=false,name=CodeSigningConfigArn"`
}

type GetCodeSigningConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCodeSigningConfigRequest struct {
	PathParams GetCodeSigningConfigPathParams
	Headers    GetCodeSigningConfigHeaders
}

type GetCodeSigningConfigResponse struct {
	ContentType                    string
	GetCodeSigningConfigResponse   *shared.GetCodeSigningConfigResponse
	InvalidParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
}
