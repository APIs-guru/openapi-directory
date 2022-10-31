package operations

import (
	"openapi/pkg/models/shared"
)

type GetOpsMetadataXAmzTargetEnum string

const (
	GetOpsMetadataXAmzTargetEnumAmazonSsmGetOpsMetadata GetOpsMetadataXAmzTargetEnum = "AmazonSSM.GetOpsMetadata"
)

type GetOpsMetadataHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOpsMetadataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetOpsMetadataRequest struct {
	Headers GetOpsMetadataHeaders
	Request shared.GetOpsMetadataRequest `request:"mediaType=application/json"`
}

type GetOpsMetadataResponse struct {
	ContentType                         string
	GetOpsMetadataResult                *shared.GetOpsMetadataResult
	InternalServerError                 *interface{}
	OpsMetadataInvalidArgumentException *interface{}
	OpsMetadataNotFoundException        *interface{}
	StatusCode                          int64
}
