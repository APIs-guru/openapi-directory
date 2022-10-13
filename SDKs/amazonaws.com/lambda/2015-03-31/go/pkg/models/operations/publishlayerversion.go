package operations

import (
	"openapi/pkg/models/shared"
)

type PublishLayerVersionPathParams struct {
	LayerName string `pathParam:"style=simple,explode=false,name=LayerName"`
}

type PublishLayerVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PublishLayerVersionRequestBodyContent struct {
	S3Bucket        *string `json:"S3Bucket"`
	S3Key           *string `json:"S3Key"`
	S3ObjectVersion *string `json:"S3ObjectVersion"`
	ZipFile         *string `json:"ZipFile"`
}

type PublishLayerVersionRequestBody struct {
	CompatibleRuntimes []shared.RuntimeEnum                  `json:"CompatibleRuntimes"`
	Content            PublishLayerVersionRequestBodyContent `json:"Content"`
	Description        *string                               `json:"Description"`
	LicenseInfo        *string                               `json:"LicenseInfo"`
}

type PublishLayerVersionRequest struct {
	PathParams PublishLayerVersionPathParams
	Headers    PublishLayerVersionHeaders
	Request    PublishLayerVersionRequestBody `request:"mediaType=application/json"`
}

type PublishLayerVersionResponse struct {
	CodeStorageExceededException   *interface{}
	ContentType                    string
	InvalidParameterValueException *interface{}
	PublishLayerVersionResponse    *shared.PublishLayerVersionResponse
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
