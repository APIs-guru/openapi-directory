package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOpsMetadataXAmzTargetEnum string

const (
	CreateOpsMetadataXAmzTargetEnumAmazonSsmCreateOpsMetadata CreateOpsMetadataXAmzTargetEnum = "AmazonSSM.CreateOpsMetadata"
)

type CreateOpsMetadataHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateOpsMetadataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
