package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteOpsMetadataXAmzTargetEnum string

const (
	DeleteOpsMetadataXAmzTargetEnumAmazonSsmDeleteOpsMetadata DeleteOpsMetadataXAmzTargetEnum = "AmazonSSM.DeleteOpsMetadata"
)

type DeleteOpsMetadataHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteOpsMetadataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteOpsMetadataRequest struct {
	Headers DeleteOpsMetadataHeaders
	Request shared.DeleteOpsMetadataRequest `request:"mediaType=application/json"`
}

type DeleteOpsMetadataResponse struct {
	ContentType                         string
	DeleteOpsMetadataResult             map[string]interface{}
	InternalServerError                 *interface{}
	OpsMetadataInvalidArgumentException *interface{}
	OpsMetadataNotFoundException        *interface{}
	StatusCode                          int64
}
