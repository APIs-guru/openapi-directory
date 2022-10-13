package operations

import (
	"openapi/pkg/models/shared"
)

type ChangePhpMemoryLimitPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type ChangePhpMemoryLimitQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type ChangePhpMemoryLimitRequest struct {
	PathParams  ChangePhpMemoryLimitPathParams
	QueryParams ChangePhpMemoryLimitQueryParams
	Request     *shared.UpdatePhpMemoryLimitRequest `request:"mediaType=application/json"`
}

type ChangePhpMemoryLimitResponse struct {
	ContentType string
	StatusCode  int64
}
