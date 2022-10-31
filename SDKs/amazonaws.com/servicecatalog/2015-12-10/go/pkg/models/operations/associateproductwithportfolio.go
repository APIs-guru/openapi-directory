package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateProductWithPortfolioXAmzTargetEnum string

const (
	AssociateProductWithPortfolioXAmzTargetEnumAws242ServiceCatalogServiceAssociateProductWithPortfolio AssociateProductWithPortfolioXAmzTargetEnum = "AWS242ServiceCatalogService.AssociateProductWithPortfolio"
)

type AssociateProductWithPortfolioHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateProductWithPortfolioXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
