package operations

type DeleteCatchAllPathParams struct {
	DomainName   string `pathParam:"style=simple,explode=false,name=domainName"`
	EmailAddress string `pathParam:"style=simple,explode=false,name=emailAddress"`
}

type DeleteCatchAllQueryParams struct {
	DomainName   string `queryParam:"style=form,explode=true,name=domain_name"`
	EmailAddress string `queryParam:"style=form,explode=true,name=email_address"`
}

type DeleteCatchAllRequest struct {
	PathParams  DeleteCatchAllPathParams
	QueryParams DeleteCatchAllQueryParams
}

type DeleteCatchAllResponse struct {
	ContentType string
	StatusCode  int64
}
