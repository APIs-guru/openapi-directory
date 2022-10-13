package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDatasetXAmzTargetEnum string

const (
	DeleteDatasetXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDeleteDataset DeleteDatasetXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.DeleteDataset"
)

type DeleteDatasetHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDatasetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDatasetRequest struct {
	Headers DeleteDatasetHeaders
	Request shared.DeleteDatasetRequest `request:"mediaType=application/json"`
}

type DeleteDatasetResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
