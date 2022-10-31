package operations

type QueryHardBouncedEmailsQueryParams struct {
	Email     *string `queryParam:"style=form,explode=true,name=email"`
	EndDate   *string `queryParam:"style=form,explode=true,name=end_date"`
	Limit     *string `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string `queryParam:"style=form,explode=true,name=offset"`
	StartDate *string `queryParam:"style=form,explode=true,name=start_date"`
}

type QueryHardBouncedEmailsRequest struct {
	QueryParams QueryHardBouncedEmailsQueryParams
}

type QueryHardBouncedEmailsResponse struct {
	ContentType string
	StatusCode  int64
}
