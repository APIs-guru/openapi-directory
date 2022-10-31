package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePortfolioSharesQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type DescribePortfolioSharesXAmzTargetEnum string

const (
	DescribePortfolioSharesXAmzTargetEnumAws242ServiceCatalogServiceDescribePortfolioShares DescribePortfolioSharesXAmzTargetEnum = "AWS242ServiceCatalogService.DescribePortfolioShares"
)

type DescribePortfolioSharesHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePortfolioSharesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribePortfolioSharesRequest struct {
	QueryParams DescribePortfolioSharesQueryParams
	Headers     DescribePortfolioSharesHeaders
	Request     shared.DescribePortfolioSharesInput `request:"mediaType=application/json"`
}

type DescribePortfolioSharesResponse struct {
	ContentType                   string
	DescribePortfolioSharesOutput *shared.DescribePortfolioSharesOutput
	InvalidParametersException    *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
