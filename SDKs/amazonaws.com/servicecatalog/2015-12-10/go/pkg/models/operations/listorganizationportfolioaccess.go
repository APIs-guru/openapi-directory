package operations

import (
	"openapi/pkg/models/shared"
)

type ListOrganizationPortfolioAccessQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListOrganizationPortfolioAccessXAmzTargetEnum string

const (
	ListOrganizationPortfolioAccessXAmzTargetEnumAws242ServiceCatalogServiceListOrganizationPortfolioAccess ListOrganizationPortfolioAccessXAmzTargetEnum = "AWS242ServiceCatalogService.ListOrganizationPortfolioAccess"
)

type ListOrganizationPortfolioAccessHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListOrganizationPortfolioAccessXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListOrganizationPortfolioAccessRequest struct {
	QueryParams ListOrganizationPortfolioAccessQueryParams
	Headers     ListOrganizationPortfolioAccessHeaders
	Request     shared.ListOrganizationPortfolioAccessInput `request:"mediaType=application/json"`
}

type ListOrganizationPortfolioAccessResponse struct {
	ContentType                           string
	InvalidParametersException            *interface{}
	ListOrganizationPortfolioAccessOutput *shared.ListOrganizationPortfolioAccessOutput
	OperationNotSupportedException        *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
}
