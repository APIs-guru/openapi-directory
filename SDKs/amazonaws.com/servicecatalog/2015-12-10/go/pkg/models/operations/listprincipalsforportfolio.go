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
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPrincipalsForPortfolioXAmzTargetEnum `header:"name=X-Amz-Target"`
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
