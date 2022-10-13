package operations

type GetContainersJSONQueryParams struct {
	All     *string `queryParam:"style=form,explode=true,name=all"`
	Filters *string `queryParam:"style=form,explode=true,name=filters"`
}

type GetContainersJSONHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type GetContainersJSONRequest struct {
	QueryParams GetContainersJSONQueryParams
	Headers     GetContainersJSONHeaders
}

type GetContainersJSONResponse struct {
	Containers  []interface{}
	ContentType string
	StatusCode  int64
}
