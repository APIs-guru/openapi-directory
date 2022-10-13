package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteParametersXAmzTargetEnum string

const (
	DeleteParametersXAmzTargetEnumAmazonSsmDeleteParameters DeleteParametersXAmzTargetEnum = "AmazonSSM.DeleteParameters"
)

type DeleteParametersHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteParametersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteParametersRequest struct {
	Headers DeleteParametersHeaders
	Request shared.DeleteParametersRequest `request:"mediaType=application/json"`
}

type DeleteParametersResponse struct {
	ContentType            string
	DeleteParametersResult *shared.DeleteParametersResult
	InternalServerError    *interface{}
	StatusCode             int64
}
