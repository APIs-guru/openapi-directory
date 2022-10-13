package operations

import (
	"openapi/pkg/models/shared"
)

type GetParameterXAmzTargetEnum string

const (
	GetParameterXAmzTargetEnumAmazonSsmGetParameter GetParameterXAmzTargetEnum = "AmazonSSM.GetParameter"
)

type GetParameterHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetParameterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetParameterRequest struct {
	Headers GetParameterHeaders
	Request shared.GetParameterRequest `request:"mediaType=application/json"`
}

type GetParameterResponse struct {
	ContentType              string
	GetParameterResult       *shared.GetParameterResult
	InternalServerError      *interface{}
	InvalidKeyID             *interface{}
	ParameterNotFound        *interface{}
	ParameterVersionNotFound *interface{}
	StatusCode               int64
}
