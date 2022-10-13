package operations

type GetGetNotificationsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetGetNotificationsRequest struct {
	QueryParams GetGetNotificationsQueryParams
}

type GetGetNotificationsResponse struct {
	ContentType string
	StatusCode  int64
}
