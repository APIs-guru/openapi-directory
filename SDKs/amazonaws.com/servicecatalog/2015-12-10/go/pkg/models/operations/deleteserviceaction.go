package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServiceActionXAmzTargetEnum string

const (
	DeleteServiceActionXAmzTargetEnumAws242ServiceCatalogServiceDeleteServiceAction DeleteServiceActionXAmzTargetEnum = "AWS242ServiceCatalogService.DeleteServiceAction"
)

type DeleteServiceActionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteServiceActionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteServiceActionRequest struct {
	Headers DeleteServiceActionHeaders
	Request shared.DeleteServiceActionInput `request:"mediaType=application/json"`
}

type DeleteServiceActionResponse struct {
	ContentType               string
	DeleteServiceActionOutput map[string]interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
