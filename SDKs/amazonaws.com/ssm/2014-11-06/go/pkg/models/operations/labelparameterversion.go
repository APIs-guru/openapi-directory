package operations

import (
	"openapi/pkg/models/shared"
)

type LabelParameterVersionXAmzTargetEnum string

const (
	LabelParameterVersionXAmzTargetEnumAmazonSsmLabelParameterVersion LabelParameterVersionXAmzTargetEnum = "AmazonSSM.LabelParameterVersion"
)

type LabelParameterVersionHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        LabelParameterVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
