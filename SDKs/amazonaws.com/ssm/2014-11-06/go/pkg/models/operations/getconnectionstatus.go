package operations

import (
	"openapi/pkg/models/shared"
)

type GetConnectionStatusXAmzTargetEnum string

const (
	GetConnectionStatusXAmzTargetEnumAmazonSsmGetConnectionStatus GetConnectionStatusXAmzTargetEnum = "AmazonSSM.GetConnectionStatus"
)

type GetConnectionStatusHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetConnectionStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetConnectionStatusRequest struct {
	Headers GetConnectionStatusHeaders
	Request shared.GetConnectionStatusRequest `request:"mediaType=application/json"`
}

type GetConnectionStatusResponse struct {
	ContentType                 string
	GetConnectionStatusResponse *shared.GetConnectionStatusResponse
	InternalServerError         *interface{}
	StatusCode                  int64
}
