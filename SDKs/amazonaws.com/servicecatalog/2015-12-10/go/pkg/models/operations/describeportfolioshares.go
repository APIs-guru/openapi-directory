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
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePortfolioSharesXAmzTargetEnum `header:"name=X-Amz-Target"`
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
