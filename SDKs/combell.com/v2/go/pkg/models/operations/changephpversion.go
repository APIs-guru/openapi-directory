package operations

import (
	"openapi/pkg/models/shared"
)

type ChangePhpVersionPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type ChangePhpVersionQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type ChangePhpVersionRequest struct {
	PathParams  ChangePhpVersionPathParams
	QueryParams ChangePhpVersionQueryParams
	Request     *shared.PhpVersion `request:"mediaType=application/json"`
}

type ChangePhpVersionResponse struct {
	ContentType string
	StatusCode  int64
}
