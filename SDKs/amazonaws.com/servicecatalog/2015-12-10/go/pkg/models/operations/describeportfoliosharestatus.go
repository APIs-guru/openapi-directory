package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePortfolioShareStatusXAmzTargetEnum string

const (
	DescribePortfolioShareStatusXAmzTargetEnumAws242ServiceCatalogServiceDescribePortfolioShareStatus DescribePortfolioShareStatusXAmzTargetEnum = "AWS242ServiceCatalogService.DescribePortfolioShareStatus"
)

type DescribePortfolioShareStatusHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePortfolioShareStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
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
