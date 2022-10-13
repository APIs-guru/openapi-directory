package operations

import (
	"openapi/pkg/models/shared"
)

type DomainsQueryParams struct {
	Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
	Take *int32 `queryParam:"style=form,explode=true,name=take"`
}

type DomainsRequest struct {
	QueryParams DomainsQueryParams
}

type DomainsResponse struct {
	ContentType string
	Domains     []shared.Domain
	Headers     map[string][]string
	StatusCode  int64
}
