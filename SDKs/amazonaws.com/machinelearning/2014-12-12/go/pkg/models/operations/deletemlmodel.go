package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMlModelXAmzTargetEnum string

const (
	DeleteMlModelXAmzTargetEnumAmazonMl20141212DeleteMlModel DeleteMlModelXAmzTargetEnum = "AmazonML_20141212.DeleteMLModel"
)

type DeleteMlModelHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteMlModelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteMlModelRequest struct {
	Headers DeleteMlModelHeaders
	Request shared.DeleteMlModelInput `request:"mediaType=application/json"`
}

type DeleteMlModelResponse struct {
	ContentType               string
	DeleteMlModelOutput       *shared.DeleteMlModelOutput
	InternalServerException   *interface{}
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
