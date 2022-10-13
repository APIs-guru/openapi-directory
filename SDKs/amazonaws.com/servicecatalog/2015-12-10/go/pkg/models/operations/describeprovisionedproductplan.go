package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProvisionedProductPlanXAmzTargetEnum string

const (
	DescribeProvisionedProductPlanXAmzTargetEnumAws242ServiceCatalogServiceDescribeProvisionedProductPlan DescribeProvisionedProductPlanXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProvisionedProductPlan"
)

type DescribeProvisionedProductPlanHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProvisionedProductPlanXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeProvisionedProductPlanRequest struct {
	Headers DescribeProvisionedProductPlanHeaders
	Request shared.DescribeProvisionedProductPlanInput `request:"mediaType=application/json"`
}

type DescribeProvisionedProductPlanResponse struct {
	ContentType                          string
	DescribeProvisionedProductPlanOutput *shared.DescribeProvisionedProductPlanOutput
	InvalidParametersException           *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
}
