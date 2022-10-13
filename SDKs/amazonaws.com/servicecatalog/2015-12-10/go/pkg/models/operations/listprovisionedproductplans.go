package operations

import (
	"openapi/pkg/models/shared"
)

type ListProvisionedProductPlansXAmzTargetEnum string

const (
	ListProvisionedProductPlansXAmzTargetEnumAws242ServiceCatalogServiceListProvisionedProductPlans ListProvisionedProductPlansXAmzTargetEnum = "AWS242ServiceCatalogService.ListProvisionedProductPlans"
)

type ListProvisionedProductPlansHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListProvisionedProductPlansXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListProvisionedProductPlansRequest struct {
	Headers ListProvisionedProductPlansHeaders
	Request shared.ListProvisionedProductPlansInput `request:"mediaType=application/json"`
}

type ListProvisionedProductPlansResponse struct {
	ContentType                       string
	InvalidParametersException        *interface{}
	ListProvisionedProductPlansOutput *shared.ListProvisionedProductPlansOutput
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
}
