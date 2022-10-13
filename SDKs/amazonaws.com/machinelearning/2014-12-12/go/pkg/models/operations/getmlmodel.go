package operations

import (
	"openapi/pkg/models/shared"
)

type GetMlModelXAmzTargetEnum string

const (
	GetMlModelXAmzTargetEnumAmazonMl20141212GetMlModel GetMlModelXAmzTargetEnum = "AmazonML_20141212.GetMLModel"
)

type GetMlModelHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMlModelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetMlModelRequest struct {
	Headers GetMlModelHeaders
	Request shared.GetMlModelInput `request:"mediaType=application/json"`
}

type GetMlModelResponse struct {
	ContentType               string
	GetMlModelOutput          *shared.GetMlModelOutput
	InternalServerException   *interface{}
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
