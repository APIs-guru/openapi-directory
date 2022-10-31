package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProvisionedProductPlanXAmzTargetEnum string

const (
	DescribeProvisionedProductPlanXAmzTargetEnumAws242ServiceCatalogServiceDescribeProvisionedProductPlan DescribeProvisionedProductPlanXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProvisionedProductPlan"
)

type DescribeProvisionedProductPlanHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProvisionedProductPlanXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
