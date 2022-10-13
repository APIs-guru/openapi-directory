package operations

type GetDriverPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDriverQueryParams struct {
	IncludeGroup        *bool `queryParam:"style=form,explode=true,name=include_group"`
	IncludeOrganization *bool `queryParam:"style=form,explode=true,name=include_organization"`
	IncludeTokens       *bool `queryParam:"style=form,explode=true,name=include_tokens"`
}

type GetDriverRequest struct {
	PathParams  GetDriverPathParams
	QueryParams GetDriverQueryParams
}

type GetDriverResponse struct {
	ContentType string
	StatusCode  int64
}
