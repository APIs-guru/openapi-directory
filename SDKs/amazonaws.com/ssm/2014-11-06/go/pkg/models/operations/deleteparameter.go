package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteParameterXAmzTargetEnum string

const (
	DeleteParameterXAmzTargetEnumAmazonSsmDeleteParameter DeleteParameterXAmzTargetEnum = "AmazonSSM.DeleteParameter"
)

type DeleteParameterHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteParameterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteParameterRequest struct {
	Headers DeleteParameterHeaders
	Request shared.DeleteParameterRequest `request:"mediaType=application/json"`
}

type DeleteParameterResponse struct {
	ContentType           string
	DeleteParameterResult map[string]interface{}
	InternalServerError   *interface{}
	ParameterNotFound     *interface{}
	StatusCode            int64
}
