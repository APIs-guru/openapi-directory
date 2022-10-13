package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAssociationBatchXAmzTargetEnum string

const (
	CreateAssociationBatchXAmzTargetEnumAmazonSsmCreateAssociationBatch CreateAssociationBatchXAmzTargetEnum = "AmazonSSM.CreateAssociationBatch"
)

type CreateAssociationBatchHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAssociationBatchXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAssociationBatchRequest struct {
	Headers CreateAssociationBatchHeaders
	Request shared.CreateAssociationBatchRequest `request:"mediaType=application/json"`
}

type CreateAssociationBatchResponse struct {
	AssociationLimitExceeded     *interface{}
	ContentType                  string
	CreateAssociationBatchResult *shared.CreateAssociationBatchResult
	DuplicateInstanceID          *interface{}
	InternalServerError          *interface{}
	InvalidDocument              *interface{}
	InvalidDocumentVersion       *interface{}
	InvalidInstanceID            *interface{}
	InvalidOutputLocation        *interface{}
	InvalidParameters            *interface{}
	InvalidSchedule              *interface{}
	InvalidTarget                *interface{}
	StatusCode                   int64
	UnsupportedPlatformType      *interface{}
}
