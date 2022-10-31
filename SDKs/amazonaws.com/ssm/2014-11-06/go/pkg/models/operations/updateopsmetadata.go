package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateOpsMetadataXAmzTargetEnum string

const (
	UpdateOpsMetadataXAmzTargetEnumAmazonSsmUpdateOpsMetadata UpdateOpsMetadataXAmzTargetEnum = "AmazonSSM.UpdateOpsMetadata"
)

type UpdateOpsMetadataHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateOpsMetadataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateOpsMetadataRequest struct {
	Headers UpdateOpsMetadataHeaders
	Request shared.UpdateOpsMetadataRequest `request:"mediaType=application/json"`
}

type UpdateOpsMetadataResponse struct {
	ContentType                          string
	InternalServerError                  *interface{}
	OpsMetadataInvalidArgumentException  *interface{}
	OpsMetadataKeyLimitExceededException *interface{}
	OpsMetadataNotFoundException         *interface{}
	OpsMetadataTooManyUpdatesException   *interface{}
	StatusCode                           int64
	UpdateOpsMetadataResult              *shared.UpdateOpsMetadataResult
}
