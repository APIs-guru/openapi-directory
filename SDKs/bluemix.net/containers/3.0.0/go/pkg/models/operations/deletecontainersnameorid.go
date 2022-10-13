package operations

type DeleteContainersNameOrIDPathParams struct {
	NameOrID string `pathParam:"style=simple,explode=false,name=name_or_id"`
}

type DeleteContainersNameOrIDQueryParams struct {
	Force *bool `queryParam:"style=form,explode=true,name=force"`
}

type DeleteContainersNameOrIDHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type DeleteContainersNameOrIDRequest struct {
	PathParams  DeleteContainersNameOrIDPathParams
	QueryParams DeleteContainersNameOrIDQueryParams
	Headers     DeleteContainersNameOrIDHeaders
}

type DeleteContainersNameOrIDResponse struct {
	ContentType string
	StatusCode  int64
}
