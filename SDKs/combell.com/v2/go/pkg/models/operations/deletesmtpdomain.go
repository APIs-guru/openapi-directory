package operations

type DeleteSMTPDomainPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
	Hostname   string `pathParam:"style=simple,explode=false,name=hostname"`
}

type DeleteSMTPDomainQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type DeleteSMTPDomainRequest struct {
	PathParams  DeleteSMTPDomainPathParams
	QueryParams DeleteSMTPDomainQueryParams
}

type DeleteSMTPDomainResponse struct {
	ContentType string
	StatusCode  int64
}
