package operations

import (
	"openapi/pkg/models/shared"
)

type UnlabelParameterVersionXAmzTargetEnum string

const (
	UnlabelParameterVersionXAmzTargetEnumAmazonSsmUnlabelParameterVersion UnlabelParameterVersionXAmzTargetEnum = "AmazonSSM.UnlabelParameterVersion"
)

type UnlabelParameterVersionHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UnlabelParameterVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
