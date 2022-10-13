package operations

type GetTokenPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTokenQueryParams struct {
	IncludeDriver       *bool `queryParam:"style=form,explode=true,name=include_driver"`
	IncludeOrganization *bool `queryParam:"style=form,explode=true,name=include_organization"`
}

type GetTokenRequest struct {
	PathParams  GetTokenPathParams
	QueryParams GetTokenQueryParams
}

type GetTokenResponse struct {
	ContentType string
	StatusCode  int64
}
