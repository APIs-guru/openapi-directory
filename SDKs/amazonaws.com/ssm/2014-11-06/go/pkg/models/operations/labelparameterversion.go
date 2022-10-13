package operations

import (
	"openapi/pkg/models/shared"
)

type LabelParameterVersionXAmzTargetEnum string

const (
	LabelParameterVersionXAmzTargetEnumAmazonSsmLabelParameterVersion LabelParameterVersionXAmzTargetEnum = "AmazonSSM.LabelParameterVersion"
)

type LabelParameterVersionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        LabelParameterVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type LabelParameterVersionRequest struct {
	Headers LabelParameterVersionHeaders
	Request shared.LabelParameterVersionRequest `request:"mediaType=application/json"`
}

type LabelParameterVersionResponse struct {
	ContentType                        string
	InternalServerError                *interface{}
	LabelParameterVersionResult        *shared.LabelParameterVersionResult
	ParameterNotFound                  *interface{}
	ParameterVersionLabelLimitExceeded *interface{}
	ParameterVersionNotFound           *interface{}
	StatusCode                         int64
	TooManyUpdates                     *interface{}
}
