package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateProductWithPortfolioXAmzTargetEnum string

const (
	AssociateProductWithPortfolioXAmzTargetEnumAws242ServiceCatalogServiceAssociateProductWithPortfolio AssociateProductWithPortfolioXAmzTargetEnum = "AWS242ServiceCatalogService.AssociateProductWithPortfolio"
)

type AssociateProductWithPortfolioHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateProductWithPortfolioXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateProductWithPortfolioRequest struct {
	Headers AssociateProductWithPortfolioHeaders
	Request shared.AssociateProductWithPortfolioInput `request:"mediaType=application/json"`
}

type AssociateProductWithPortfolioResponse struct {
	AssociateProductWithPortfolioOutput map[string]interface{}
	ContentType                         string
	InvalidParametersException          *interface{}
	LimitExceededException              *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
}
