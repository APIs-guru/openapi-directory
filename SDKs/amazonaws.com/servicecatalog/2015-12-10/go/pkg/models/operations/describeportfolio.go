package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePortfolioXAmzTargetEnum string

const (
	DescribePortfolioXAmzTargetEnumAws242ServiceCatalogServiceDescribePortfolio DescribePortfolioXAmzTargetEnum = "AWS242ServiceCatalogService.DescribePortfolio"
)

type DescribePortfolioHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePortfolioXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
