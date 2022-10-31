package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServiceActionXAmzTargetEnum string

const (
	DeleteServiceActionXAmzTargetEnumAws242ServiceCatalogServiceDeleteServiceAction DeleteServiceActionXAmzTargetEnum = "AWS242ServiceCatalogService.DeleteServiceAction"
)

type DeleteServiceActionHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteServiceActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
