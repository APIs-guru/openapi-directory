package operations

import (
	"openapi/pkg/models/shared"
)

type ListStackInstancesForProvisionedProductXAmzTargetEnum string

const (
	ListStackInstancesForProvisionedProductXAmzTargetEnumAws242ServiceCatalogServiceListStackInstancesForProvisionedProduct ListStackInstancesForProvisionedProductXAmzTargetEnum = "AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct"
)

type ListStackInstancesForProvisionedProductHeaders struct {
	XAmzAlgorithm     *string                                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListStackInstancesForProvisionedProductXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListStackInstancesForProvisionedProductRequest struct {
	Headers ListStackInstancesForProvisionedProductHeaders
	Request shared.ListStackInstancesForProvisionedProductInput `request:"mediaType=application/json"`
}

type ListStackInstancesForProvisionedProductResponse struct {
	ContentType                                   string
	InvalidParametersException                    *interface{}
	ListStackInstancesForProvisionedProductOutput *shared.ListStackInstancesForProvisionedProductOutput
	ResourceNotFoundException                     *interface{}
	StatusCode                                    int64
}
