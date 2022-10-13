package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDatasetImportJobXAmzTargetEnum string

const (
	CreateDatasetImportJobXAmzTargetEnumAmazonPersonalizeCreateDatasetImportJob CreateDatasetImportJobXAmzTargetEnum = "AmazonPersonalize.CreateDatasetImportJob"
)

type CreateDatasetImportJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDatasetImportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDatasetImportJobRequest struct {
	Headers CreateDatasetImportJobHeaders
	Request shared.CreateDatasetImportJobRequest `request:"mediaType=application/json"`
}

type CreateDatasetImportJobResponse struct {
	ContentType                    string
	CreateDatasetImportJobResponse *shared.CreateDatasetImportJobResponse
	InvalidInputException          *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceInUseException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
