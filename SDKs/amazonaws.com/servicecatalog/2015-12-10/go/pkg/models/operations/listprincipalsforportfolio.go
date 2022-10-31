package operations

import (
	"openapi/pkg/models/shared"
)

type ListPrincipalsForPortfolioQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListPrincipalsForPortfolioXAmzTargetEnum string

const (
	ListPrincipalsForPortfolioXAmzTargetEnumAws242ServiceCatalogServiceListPrincipalsForPortfolio ListPrincipalsForPortfolioXAmzTargetEnum = "AWS242ServiceCatalogService.ListPrincipalsForPortfolio"
)

type ListPrincipalsForPortfolioHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPrincipalsForPortfolioXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListPrincipalsForPortfolioRequest struct {
	QueryParams ListPrincipalsForPortfolioQueryParams
	Headers     ListPrincipalsForPortfolioHeaders
	Request     shared.ListPrincipalsForPortfolioInput `request:"mediaType=application/json"`
}

type ListPrincipalsForPortfolioResponse struct {
	ContentType                      string
	InvalidParametersException       *interface{}
	ListPrincipalsForPortfolioOutput *shared.ListPrincipalsForPortfolioOutput
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
}
