package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePortfolioXAmzTargetEnum string

const (
	DescribePortfolioXAmzTargetEnumAws242ServiceCatalogServiceDescribePortfolio DescribePortfolioXAmzTargetEnum = "AWS242ServiceCatalogService.DescribePortfolio"
)

type DescribePortfolioHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePortfolioXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribePortfolioRequest struct {
	Headers DescribePortfolioHeaders
	Request shared.DescribePortfolioInput `request:"mediaType=application/json"`
}

type DescribePortfolioResponse struct {
	ContentType               string
	DescribePortfolioOutput   *shared.DescribePortfolioOutput
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
