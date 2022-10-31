package operations

import (
	"openapi/pkg/models/shared"
)

type CreateHostHeaderPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
	SiteName   string `pathParam:"style=simple,explode=false,name=siteName"`
}

type CreateHostHeaderQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
	SiteName   string `queryParam:"style=form,explode=true,name=site_name"`
}

type CreateHostHeaderRequest struct {
	PathParams  CreateHostHeaderPathParams
	QueryParams CreateHostHeaderQueryParams
	Request     *shared.AddHostHeaderRequest `request:"mediaType=application/json"`
}

type CreateHostHeaderResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
