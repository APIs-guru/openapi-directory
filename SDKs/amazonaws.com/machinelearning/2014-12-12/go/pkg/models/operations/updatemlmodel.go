package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMlModelXAmzTargetEnum string

const (
	UpdateMlModelXAmzTargetEnumAmazonMl20141212UpdateMlModel UpdateMlModelXAmzTargetEnum = "AmazonML_20141212.UpdateMLModel"
)

type UpdateMlModelHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateMlModelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateMlModelRequest struct {
	Headers UpdateMlModelHeaders
	Request shared.UpdateMlModelInput `request:"mediaType=application/json"`
}

type UpdateMlModelResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateMlModelOutput       *shared.UpdateMlModelOutput
}
