package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBatchInferenceJobXAmzTargetEnum string

const (
	CreateBatchInferenceJobXAmzTargetEnumAmazonPersonalizeCreateBatchInferenceJob CreateBatchInferenceJobXAmzTargetEnum = "AmazonPersonalize.CreateBatchInferenceJob"
)

type CreateBatchInferenceJobHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateBatchInferenceJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateBatchInferenceJobRequest struct {
	Headers CreateBatchInferenceJobHeaders
	Request shared.CreateBatchInferenceJobRequest `request:"mediaType=application/json"`
}

type CreateBatchInferenceJobResponse struct {
	ContentType                     string
	CreateBatchInferenceJobResponse *shared.CreateBatchInferenceJobResponse
	InvalidInputException           *interface{}
	LimitExceededException          *interface{}
	ResourceAlreadyExistsException  *interface{}
	ResourceInUseException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
