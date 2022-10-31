package operations

import (
	"openapi/pkg/models/shared"
)

type GetUploadStatusXAmzTargetEnum string

const (
	GetUploadStatusXAmzTargetEnumIotThingsGraphFrontEndServiceGetUploadStatus GetUploadStatusXAmzTargetEnum = "IotThingsGraphFrontEndService.GetUploadStatus"
)

type GetUploadStatusHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetUploadStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetUploadStatusRequest struct {
	Headers GetUploadStatusHeaders
	Request shared.GetUploadStatusRequest `request:"mediaType=application/json"`
}

type GetUploadStatusResponse struct {
	ContentType               string
	GetUploadStatusResponse   *shared.GetUploadStatusResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
