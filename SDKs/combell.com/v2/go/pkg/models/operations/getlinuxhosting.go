package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinuxHostingPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type GetLinuxHostingQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type GetLinuxHostingRequest struct {
	PathParams  GetLinuxHostingPathParams
	QueryParams GetLinuxHostingQueryParams
}

type GetLinuxHostingResponse struct {
	ContentType        string
	LinuxHostingDetail *shared.LinuxHostingDetail
	StatusCode         int64
}
