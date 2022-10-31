package operations

type CustomEventsListQueryParams struct {
	Page *string `queryParam:"style=form,explode=true,name=page"`
}

type CustomEventsListRequest struct {
	QueryParams CustomEventsListQueryParams
}

type CustomEventsListResponse struct {
	ContentType string
	StatusCode  int64
}
