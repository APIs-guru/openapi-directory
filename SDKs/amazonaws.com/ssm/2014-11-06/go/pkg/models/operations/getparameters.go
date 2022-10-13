package operations

import (
	"openapi/pkg/models/shared"
)

type GetParametersXAmzTargetEnum string

const (
	GetParametersXAmzTargetEnumAmazonSsmGetParameters GetParametersXAmzTargetEnum = "AmazonSSM.GetParameters"
)

type GetParametersHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetParametersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetParametersRequest struct {
	Headers GetParametersHeaders
	Request shared.GetParametersRequest `request:"mediaType=application/json"`
}

type GetParametersResponse struct {
	ContentType         string
	GetParametersResult *shared.GetParametersResult
	InternalServerError *interface{}
	InvalidKeyID        *interface{}
	StatusCode          int64
}
