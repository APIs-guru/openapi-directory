package operations

import (
	"openapi/pkg/models/shared"
)

type ListBudgetsForResourceQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListBudgetsForResourceXAmzTargetEnum string

const (
	ListBudgetsForResourceXAmzTargetEnumAws242ServiceCatalogServiceListBudgetsForResource ListBudgetsForResourceXAmzTargetEnum = "AWS242ServiceCatalogService.ListBudgetsForResource"
)

type ListBudgetsForResourceHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListBudgetsForResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListBudgetsForResourceRequest struct {
	QueryParams ListBudgetsForResourceQueryParams
	Headers     ListBudgetsForResourceHeaders
	Request     shared.ListBudgetsForResourceInput `request:"mediaType=application/json"`
}

type ListBudgetsForResourceResponse struct {
	ContentType                  string
	InvalidParametersException   *interface{}
	ListBudgetsForResourceOutput *shared.ListBudgetsForResourceOutput
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
