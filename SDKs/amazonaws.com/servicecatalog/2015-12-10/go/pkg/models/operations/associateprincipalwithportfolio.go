package operations

import (
	"openapi/pkg/models/shared"
)

type AssociatePrincipalWithPortfolioXAmzTargetEnum string

const (
	AssociatePrincipalWithPortfolioXAmzTargetEnumAws242ServiceCatalogServiceAssociatePrincipalWithPortfolio AssociatePrincipalWithPortfolioXAmzTargetEnum = "AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio"
)

type AssociatePrincipalWithPortfolioHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociatePrincipalWithPortfolioXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociatePrincipalWithPortfolioRequest struct {
	Headers AssociatePrincipalWithPortfolioHeaders
	Request shared.AssociatePrincipalWithPortfolioInput `request:"mediaType=application/json"`
}

type AssociatePrincipalWithPortfolioResponse struct {
	AssociatePrincipalWithPortfolioOutput map[string]interface{}
	ContentType                           string
	InvalidParametersException            *interface{}
	LimitExceededException                *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
}
