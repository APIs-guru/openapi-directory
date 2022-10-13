package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureHttp2PathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
	SiteName   string `pathParam:"style=simple,explode=false,name=siteName"`
}

type ConfigureHttp2QueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
	SiteName   string `queryParam:"style=form,explode=true,name=site_name"`
}

type ConfigureHttp2Request struct {
	PathParams  ConfigureHttp2PathParams
	QueryParams ConfigureHttp2QueryParams
	Request     *shared.Http2Configuration `request:"mediaType=application/json"`
}

type ConfigureHttp2Response struct {
	ContentType string
	StatusCode  int64
}
