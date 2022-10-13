package operations

import (
	"openapi/pkg/models/shared"
)

type UnlabelParameterVersionXAmzTargetEnum string

const (
	UnlabelParameterVersionXAmzTargetEnumAmazonSsmUnlabelParameterVersion UnlabelParameterVersionXAmzTargetEnum = "AmazonSSM.UnlabelParameterVersion"
)

type UnlabelParameterVersionHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UnlabelParameterVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UnlabelParameterVersionRequest struct {
	Headers UnlabelParameterVersionHeaders
	Request shared.UnlabelParameterVersionRequest `request:"mediaType=application/json"`
}

type UnlabelParameterVersionResponse struct {
	ContentType                   string
	InternalServerError           *interface{}
	ParameterNotFound             *interface{}
	ParameterVersionNotFound      *interface{}
	StatusCode                    int64
	TooManyUpdates                *interface{}
	UnlabelParameterVersionResult *shared.UnlabelParameterVersionResult
}
