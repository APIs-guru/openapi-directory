package operations

import (
	"openapi/pkg/models/shared"
)

type ImportAsProvisionedProductXAmzTargetEnum string

const (
	ImportAsProvisionedProductXAmzTargetEnumAws242ServiceCatalogServiceImportAsProvisionedProduct ImportAsProvisionedProductXAmzTargetEnum = "AWS242ServiceCatalogService.ImportAsProvisionedProduct"
)

type ImportAsProvisionedProductHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ImportAsProvisionedProductXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ImportAsProvisionedProductRequest struct {
	Headers ImportAsProvisionedProductHeaders
	Request shared.ImportAsProvisionedProductInput `request:"mediaType=application/json"`
}

type ImportAsProvisionedProductResponse struct {
	ContentType                      string
	DuplicateResourceException       *interface{}
	ImportAsProvisionedProductOutput *shared.ImportAsProvisionedProductOutput
	InvalidParametersException       *interface{}
	InvalidStateException            *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
}
