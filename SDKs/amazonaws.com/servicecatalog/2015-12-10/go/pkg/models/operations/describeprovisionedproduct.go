package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProvisionedProductXAmzTargetEnum string

const (
	DescribeProvisionedProductXAmzTargetEnumAws242ServiceCatalogServiceDescribeProvisionedProduct DescribeProvisionedProductXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProvisionedProduct"
)

type DescribeProvisionedProductHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProvisionedProductXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeProvisionedProductRequest struct {
	Headers DescribeProvisionedProductHeaders
	Request shared.DescribeProvisionedProductInput `request:"mediaType=application/json"`
}

type DescribeProvisionedProductResponse struct {
	ContentType                      string
	DescribeProvisionedProductOutput *shared.DescribeProvisionedProductOutput
	InvalidParametersException       *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
}
