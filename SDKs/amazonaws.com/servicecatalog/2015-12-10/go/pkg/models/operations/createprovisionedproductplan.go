package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProvisionedProductPlanXAmzTargetEnum string

const (
	CreateProvisionedProductPlanXAmzTargetEnumAws242ServiceCatalogServiceCreateProvisionedProductPlan CreateProvisionedProductPlanXAmzTargetEnum = "AWS242ServiceCatalogService.CreateProvisionedProductPlan"
)

type CreateProvisionedProductPlanHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateProvisionedProductPlanXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
