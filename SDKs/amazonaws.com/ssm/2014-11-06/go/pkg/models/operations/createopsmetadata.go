package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOpsMetadataXAmzTargetEnum string

const (
	CreateOpsMetadataXAmzTargetEnumAmazonSsmCreateOpsMetadata CreateOpsMetadataXAmzTargetEnum = "AmazonSSM.CreateOpsMetadata"
)

type CreateOpsMetadataHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateOpsMetadataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateOpsMetadataRequest struct {
	Headers CreateOpsMetadataHeaders
	Request shared.CreateOpsMetadataRequest `request:"mediaType=application/json"`
}

type CreateOpsMetadataResponse struct {
	ContentType                         string
	CreateOpsMetadataResult             *shared.CreateOpsMetadataResult
	InternalServerError                 *interface{}
	OpsMetadataAlreadyExistsException   *interface{}
	OpsMetadataInvalidArgumentException *interface{}
	OpsMetadataLimitExceededException   *interface{}
	OpsMetadataTooManyUpdatesException  *interface{}
	StatusCode                          int64
}
