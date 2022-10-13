package operations

import (
	"openapi/pkg/models/shared"
)

type CreateActivationXAmzTargetEnum string

const (
	CreateActivationXAmzTargetEnumAmazonSsmCreateActivation CreateActivationXAmzTargetEnum = "AmazonSSM.CreateActivation"
)

type CreateActivationHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateActivationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateActivationRequest struct {
	Headers CreateActivationHeaders
	Request shared.CreateActivationRequest `request:"mediaType=application/json"`
}

type CreateActivationResponse struct {
	ContentType            string
	CreateActivationResult *shared.CreateActivationResult
	InternalServerError    *interface{}
	StatusCode             int64
}
