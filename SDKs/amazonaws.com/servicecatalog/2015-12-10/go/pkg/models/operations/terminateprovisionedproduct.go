package operations

import (
	"openapi/pkg/models/shared"
)

type TerminateProvisionedProductXAmzTargetEnum string

const (
	TerminateProvisionedProductXAmzTargetEnumAws242ServiceCatalogServiceTerminateProvisionedProduct TerminateProvisionedProductXAmzTargetEnum = "AWS242ServiceCatalogService.TerminateProvisionedProduct"
)

type TerminateProvisionedProductHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TerminateProvisionedProductXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TerminateProvisionedProductRequest struct {
	Headers TerminateProvisionedProductHeaders
	Request shared.TerminateProvisionedProductInput `request:"mediaType=application/json"`
}

type TerminateProvisionedProductResponse struct {
	ContentType                       string
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	TerminateProvisionedProductOutput *shared.TerminateProvisionedProductOutput
}
