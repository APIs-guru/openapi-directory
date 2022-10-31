package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePortfolioShareStatusXAmzTargetEnum string

const (
	DescribePortfolioShareStatusXAmzTargetEnumAws242ServiceCatalogServiceDescribePortfolioShareStatus DescribePortfolioShareStatusXAmzTargetEnum = "AWS242ServiceCatalogService.DescribePortfolioShareStatus"
)

type DescribePortfolioShareStatusHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePortfolioShareStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribePortfolioShareStatusRequest struct {
	Headers DescribePortfolioShareStatusHeaders
	Request shared.DescribePortfolioShareStatusInput `request:"mediaType=application/json"`
}

type DescribePortfolioShareStatusResponse struct {
	ContentType                        string
	DescribePortfolioShareStatusOutput *shared.DescribePortfolioShareStatusOutput
	InvalidParametersException         *interface{}
	OperationNotSupportedException     *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
