package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCatchAllPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type CreateCatchAllQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type CreateCatchAllRequest struct {
	PathParams  CreateCatchAllPathParams
	QueryParams CreateCatchAllQueryParams
	Request     *shared.CreateCatchAllRequest `request:"mediaType=application/json"`
}

type CreateCatchAllResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
