package operations

import (
	"openapi/pkg/models/shared"
)

type CreateServiceActionXAmzTargetEnum string

const (
	CreateServiceActionXAmzTargetEnumAws242ServiceCatalogServiceCreateServiceAction CreateServiceActionXAmzTargetEnum = "AWS242ServiceCatalogService.CreateServiceAction"
)

type CreateServiceActionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateServiceActionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateServiceActionRequest struct {
	Headers CreateServiceActionHeaders
	Request shared.CreateServiceActionInput `request:"mediaType=application/json"`
}

type CreateServiceActionResponse struct {
	ContentType                string
	CreateServiceActionOutput  *shared.CreateServiceActionOutput
	InvalidParametersException *interface{}
	LimitExceededException     *interface{}
	StatusCode                 int64
}
