package operations

import (
	"openapi/pkg/models/shared"
)

type ListPortfoliosForProductQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListPortfoliosForProductXAmzTargetEnum string

const (
	ListPortfoliosForProductXAmzTargetEnumAws242ServiceCatalogServiceListPortfoliosForProduct ListPortfoliosForProductXAmzTargetEnum = "AWS242ServiceCatalogService.ListPortfoliosForProduct"
)

type ListPortfoliosForProductHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPortfoliosForProductXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPortfoliosForProductRequest struct {
	QueryParams ListPortfoliosForProductQueryParams
	Headers     ListPortfoliosForProductHeaders
	Request     shared.ListPortfoliosForProductInput `request:"mediaType=application/json"`
}

type ListPortfoliosForProductResponse struct {
	ContentType                    string
	InvalidParametersException     *interface{}
	ListPortfoliosForProductOutput *shared.ListPortfoliosForProductOutput
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
