package operations

import (
	"openapi/pkg/models/shared"
)

type PublishLayerVersionPathParams struct {
	LayerName string `pathParam:"style=simple,explode=false,name=LayerName"`
}

type PublishLayerVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PublishLayerVersionRequestBodyContent struct {
	S3Bucket        *string `json:"S3Bucket,omitempty"`
	S3Key           *string `json:"S3Key,omitempty"`
	S3ObjectVersion *string `json:"S3ObjectVersion,omitempty"`
	ZipFile         *string `json:"ZipFile,omitempty"`
}

type PublishLayerVersionRequestBody struct {
	CompatibleRuntimes []shared.RuntimeEnum                  `json:"CompatibleRuntimes,omitempty"`
	Content            PublishLayerVersionRequestBodyContent `json:"Content"`
	Description        *string                               `json:"Description,omitempty"`
	LicenseInfo        *string                               `json:"LicenseInfo,omitempty"`
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
