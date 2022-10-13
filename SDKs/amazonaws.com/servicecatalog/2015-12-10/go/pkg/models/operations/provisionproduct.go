package operations

import (
	"openapi/pkg/models/shared"
)

type ProvisionProductXAmzTargetEnum string

const (
	ProvisionProductXAmzTargetEnumAws242ServiceCatalogServiceProvisionProduct ProvisionProductXAmzTargetEnum = "AWS242ServiceCatalogService.ProvisionProduct"
)

type ProvisionProductHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ProvisionProductXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ProvisionProductRequest struct {
	Headers ProvisionProductHeaders
	Request shared.ProvisionProductInput `request:"mediaType=application/json"`
}

type ProvisionProductResponse struct {
	ContentType                string
	DuplicateResourceException *interface{}
	InvalidParametersException *interface{}
	ProvisionProductOutput     *shared.ProvisionProductOutput
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
