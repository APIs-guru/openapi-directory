package operations

import (
	"openapi/pkg/models/shared"
)

type ExportServerEngineAttributeXAmzTargetEnum string

const (
	ExportServerEngineAttributeXAmzTargetEnumOpsWorksCmV20161101ExportServerEngineAttribute ExportServerEngineAttributeXAmzTargetEnum = "OpsWorksCM_V2016_11_01.ExportServerEngineAttribute"
)

type ExportServerEngineAttributeHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ExportServerEngineAttributeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ExportServerEngineAttributeRequest struct {
	Headers ExportServerEngineAttributeHeaders
	Request shared.ExportServerEngineAttributeRequest `request:"mediaType=application/json"`
}

type ExportServerEngineAttributeResponse struct {
	ContentType                         string
	ExportServerEngineAttributeResponse *shared.ExportServerEngineAttributeResponse
	InvalidStateException               *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	ValidationException                 *interface{}
}
