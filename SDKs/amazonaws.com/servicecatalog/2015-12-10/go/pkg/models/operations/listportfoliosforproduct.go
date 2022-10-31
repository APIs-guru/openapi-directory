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
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPortfoliosForProductXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
