package operations

import (
	"openapi/pkg/models/shared"
)

type ListPortfoliosQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListPortfoliosXAmzTargetEnum string

const (
	ListPortfoliosXAmzTargetEnumAws242ServiceCatalogServiceListPortfolios ListPortfoliosXAmzTargetEnum = "AWS242ServiceCatalogService.ListPortfolios"
)

type ListPortfoliosHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPortfoliosXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPortfoliosRequest struct {
	QueryParams ListPortfoliosQueryParams
	Headers     ListPortfoliosHeaders
	Request     shared.ListPortfoliosInput `request:"mediaType=application/json"`
}

type ListPortfoliosResponse struct {
	ContentType                string
	InvalidParametersException *interface{}
	ListPortfoliosOutput       *shared.ListPortfoliosOutput
	StatusCode                 int64
}
