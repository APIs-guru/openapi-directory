package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProvisionedProductPlanXAmzTargetEnum string

const (
	CreateProvisionedProductPlanXAmzTargetEnumAws242ServiceCatalogServiceCreateProvisionedProductPlan CreateProvisionedProductPlanXAmzTargetEnum = "AWS242ServiceCatalogService.CreateProvisionedProductPlan"
)

type CreateProvisionedProductPlanHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateProvisionedProductPlanXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateProvisionedProductPlanRequest struct {
	Headers CreateProvisionedProductPlanHeaders
	Request shared.CreateProvisionedProductPlanInput `request:"mediaType=application/json"`
}

type CreateProvisionedProductPlanResponse struct {
	ContentType                        string
	CreateProvisionedProductPlanOutput *shared.CreateProvisionedProductPlanOutput
	InvalidParametersException         *interface{}
	InvalidStateException              *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
