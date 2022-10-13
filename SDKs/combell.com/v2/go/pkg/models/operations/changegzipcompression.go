package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeGzipCompressionPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type ChangeGzipCompressionQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type ChangeGzipCompressionRequest struct {
	PathParams  ChangeGzipCompressionPathParams
	QueryParams ChangeGzipCompressionQueryParams
	Request     *shared.GzipConfig `request:"mediaType=application/json"`
}

type ChangeGzipCompressionResponse struct {
	ContentType string
	StatusCode  int64
}
