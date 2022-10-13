package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDatasetExportJobXAmzTargetEnum string

const (
	CreateDatasetExportJobXAmzTargetEnumAmazonPersonalizeCreateDatasetExportJob CreateDatasetExportJobXAmzTargetEnum = "AmazonPersonalize.CreateDatasetExportJob"
)

type CreateDatasetExportJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDatasetExportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDatasetExportJobRequest struct {
	Headers CreateDatasetExportJobHeaders
	Request shared.CreateDatasetExportJobRequest `request:"mediaType=application/json"`
}

type CreateDatasetExportJobResponse struct {
	ContentType                    string
	CreateDatasetExportJobResponse *shared.CreateDatasetExportJobResponse
	InvalidInputException          *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceInUseException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
