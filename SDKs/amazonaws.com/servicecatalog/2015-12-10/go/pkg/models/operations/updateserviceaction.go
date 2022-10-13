package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceActionXAmzTargetEnum string

const (
	UpdateServiceActionXAmzTargetEnumAws242ServiceCatalogServiceUpdateServiceAction UpdateServiceActionXAmzTargetEnum = "AWS242ServiceCatalogService.UpdateServiceAction"
)

type UpdateServiceActionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServiceActionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateServiceActionRequest struct {
	Headers UpdateServiceActionHeaders
	Request shared.UpdateServiceActionInput `request:"mediaType=application/json"`
}

type UpdateServiceActionResponse struct {
	ContentType                string
	InvalidParametersException *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	UpdateServiceActionOutput  *shared.UpdateServiceActionOutput
}
