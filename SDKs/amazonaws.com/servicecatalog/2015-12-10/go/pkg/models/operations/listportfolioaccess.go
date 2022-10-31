package operations

import (
	"openapi/pkg/models/shared"
)

type ListPortfolioAccessQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListPortfolioAccessXAmzTargetEnum string

const (
	ListPortfolioAccessXAmzTargetEnumAws242ServiceCatalogServiceListPortfolioAccess ListPortfolioAccessXAmzTargetEnum = "AWS242ServiceCatalogService.ListPortfolioAccess"
)

type ListPortfolioAccessHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPortfolioAccessXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListPortfolioAccessRequest struct {
	QueryParams ListPortfolioAccessQueryParams
	Headers     ListPortfolioAccessHeaders
	Request     shared.ListPortfolioAccessInput `request:"mediaType=application/json"`
}

type ListPortfolioAccessResponse struct {
	ContentType                string
	InvalidParametersException *interface{}
	ListPortfolioAccessOutput  *shared.ListPortfolioAccessOutput
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
