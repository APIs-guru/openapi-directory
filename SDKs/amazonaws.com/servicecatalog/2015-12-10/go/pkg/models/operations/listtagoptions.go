package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagOptionsQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListTagOptionsXAmzTargetEnum string

const (
	ListTagOptionsXAmzTargetEnumAws242ServiceCatalogServiceListTagOptions ListTagOptionsXAmzTargetEnum = "AWS242ServiceCatalogService.ListTagOptions"
)

type ListTagOptionsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagOptionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTagOptionsRequest struct {
	QueryParams ListTagOptionsQueryParams
	Headers     ListTagOptionsHeaders
	Request     shared.ListTagOptionsInput `request:"mediaType=application/json"`
}

type ListTagOptionsResponse struct {
	ContentType                   string
	InvalidParametersException    *interface{}
	ListTagOptionsOutput          *shared.ListTagOptionsOutput
	StatusCode                    int64
	TagOptionNotMigratedException *interface{}
}
