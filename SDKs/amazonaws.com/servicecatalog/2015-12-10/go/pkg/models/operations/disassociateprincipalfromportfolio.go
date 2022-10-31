package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociatePrincipalFromPortfolioXAmzTargetEnum string

const (
	DisassociatePrincipalFromPortfolioXAmzTargetEnumAws242ServiceCatalogServiceDisassociatePrincipalFromPortfolio DisassociatePrincipalFromPortfolioXAmzTargetEnum = "AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio"
)

type DisassociatePrincipalFromPortfolioHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociatePrincipalFromPortfolioXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisassociatePrincipalFromPortfolioRequest struct {
	Headers DisassociatePrincipalFromPortfolioHeaders
	Request shared.DisassociatePrincipalFromPortfolioInput `request:"mediaType=application/json"`
}

type DisassociatePrincipalFromPortfolioResponse struct {
	ContentType                              string
	DisassociatePrincipalFromPortfolioOutput map[string]interface{}
	InvalidParametersException               *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
}
