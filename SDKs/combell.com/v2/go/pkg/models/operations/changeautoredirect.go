package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeAutoRedirectPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
	Hostname   string `pathParam:"style=simple,explode=false,name=hostname"`
}

type ChangeAutoRedirectQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type ChangeAutoRedirectRequest struct {
	PathParams  ChangeAutoRedirectPathParams
	QueryParams ChangeAutoRedirectQueryParams
	Request     *shared.AutoRedirectConfig `request:"mediaType=application/json"`
}

type ChangeAutoRedirectResponse struct {
	ContentType string
	StatusCode  int64
}
