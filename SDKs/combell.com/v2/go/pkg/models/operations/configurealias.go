package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureAliasPathParams struct {
	DomainName   string `pathParam:"style=simple,explode=false,name=domainName"`
	EmailAddress string `pathParam:"style=simple,explode=false,name=emailAddress"`
}

type ConfigureAliasQueryParams struct {
	DomainName   string `queryParam:"style=form,explode=true,name=domain_name"`
	EmailAddress string `queryParam:"style=form,explode=true,name=email_address"`
}

type ConfigureAliasRequest struct {
	PathParams  ConfigureAliasPathParams
	QueryParams ConfigureAliasQueryParams
	Request     *shared.UpdateAliasRequest `request:"mediaType=application/json"`
}

type ConfigureAliasResponse struct {
	BadRequestResponse *shared.BadRequestResponse
	ContentType        string
	StatusCode         int64
}
