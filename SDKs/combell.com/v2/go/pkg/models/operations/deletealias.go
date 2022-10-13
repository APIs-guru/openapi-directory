package operations

type DeleteAliasPathParams struct {
	DomainName   string `pathParam:"style=simple,explode=false,name=domainName"`
	EmailAddress string `pathParam:"style=simple,explode=false,name=emailAddress"`
}

type DeleteAliasQueryParams struct {
	DomainName   string `queryParam:"style=form,explode=true,name=domain_name"`
	EmailAddress string `queryParam:"style=form,explode=true,name=email_address"`
}

type DeleteAliasRequest struct {
	PathParams  DeleteAliasPathParams
	QueryParams DeleteAliasQueryParams
}

type DeleteAliasResponse struct {
	ContentType string
	StatusCode  int64
}
