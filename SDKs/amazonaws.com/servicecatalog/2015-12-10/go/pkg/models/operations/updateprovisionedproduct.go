package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProvisionedProductXAmzTargetEnum string

const (
	UpdateProvisionedProductXAmzTargetEnumAws242ServiceCatalogServiceUpdateProvisionedProduct UpdateProvisionedProductXAmzTargetEnum = "AWS242ServiceCatalogService.UpdateProvisionedProduct"
)

type UpdateProvisionedProductHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateProvisionedProductXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateProvisionedProductRequest struct {
	Headers UpdateProvisionedProductHeaders
	Request shared.UpdateProvisionedProductInput `request:"mediaType=application/json"`
}

type UpdateProvisionedProductResponse struct {
	ContentType                    string
	InvalidParametersException     *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	UpdateProvisionedProductOutput *shared.UpdateProvisionedProductOutput
}
