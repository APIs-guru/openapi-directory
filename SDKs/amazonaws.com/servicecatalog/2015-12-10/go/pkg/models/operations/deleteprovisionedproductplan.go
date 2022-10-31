package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProvisionedProductPlanXAmzTargetEnum string

const (
	DeleteProvisionedProductPlanXAmzTargetEnumAws242ServiceCatalogServiceDeleteProvisionedProductPlan DeleteProvisionedProductPlanXAmzTargetEnum = "AWS242ServiceCatalogService.DeleteProvisionedProductPlan"
)

type DeleteProvisionedProductPlanHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteProvisionedProductPlanXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteProvisionedProductPlanRequest struct {
	Headers DeleteProvisionedProductPlanHeaders
	Request shared.DeleteProvisionedProductPlanInput `request:"mediaType=application/json"`
}

type DeleteProvisionedProductPlanResponse struct {
	ContentType                        string
	DeleteProvisionedProductPlanOutput map[string]interface{}
	InvalidParametersException         *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
