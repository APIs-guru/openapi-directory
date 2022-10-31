package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLayerXAmzTargetEnum string

const (
	UpdateLayerXAmzTargetEnumOpsWorks20130218UpdateLayer UpdateLayerXAmzTargetEnum = "OpsWorks_20130218.UpdateLayer"
)

type UpdateLayerHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLayerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateLayerRequest struct {
	Headers UpdateLayerHeaders
	Request shared.UpdateLayerRequest `request:"mediaType=application/json"`
}

type UpdateLayerResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
