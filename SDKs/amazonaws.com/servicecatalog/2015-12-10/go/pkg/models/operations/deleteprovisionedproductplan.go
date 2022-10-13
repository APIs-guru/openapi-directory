package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProvisionedProductPlanXAmzTargetEnum string

const (
	DeleteProvisionedProductPlanXAmzTargetEnumAws242ServiceCatalogServiceDeleteProvisionedProductPlan DeleteProvisionedProductPlanXAmzTargetEnum = "AWS242ServiceCatalogService.DeleteProvisionedProductPlan"
)

type DeleteProvisionedProductPlanHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteProvisionedProductPlanXAmzTargetEnum `header:"name=X-Amz-Target"`
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
