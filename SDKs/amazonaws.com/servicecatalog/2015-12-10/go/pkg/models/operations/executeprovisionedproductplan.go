package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteProvisionedProductPlanXAmzTargetEnum string

const (
	ExecuteProvisionedProductPlanXAmzTargetEnumAws242ServiceCatalogServiceExecuteProvisionedProductPlan ExecuteProvisionedProductPlanXAmzTargetEnum = "AWS242ServiceCatalogService.ExecuteProvisionedProductPlan"
)

type ExecuteProvisionedProductPlanHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ExecuteProvisionedProductPlanXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ExecuteProvisionedProductPlanRequest struct {
	Headers ExecuteProvisionedProductPlanHeaders
	Request shared.ExecuteProvisionedProductPlanInput `request:"mediaType=application/json"`
}

type ExecuteProvisionedProductPlanResponse struct {
	ContentType                         string
	ExecuteProvisionedProductPlanOutput *shared.ExecuteProvisionedProductPlanOutput
	InvalidParametersException          *interface{}
	InvalidStateException               *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
}
