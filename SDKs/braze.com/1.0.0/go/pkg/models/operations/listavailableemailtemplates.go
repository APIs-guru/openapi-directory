package operations

type ListAvailableEmailTemplatesQueryParams struct {
	Limit          *string `queryParam:"style=form,explode=true,name=limit"`
	ModifiedAfter  *string `queryParam:"style=form,explode=true,name=modified_after"`
	ModifiedBefore *string `queryParam:"style=form,explode=true,name=modified_before"`
	Offset         *string `queryParam:"style=form,explode=true,name=offset"`
}

type ListAvailableEmailTemplatesRequest struct {
	QueryParams ListAvailableEmailTemplatesQueryParams
}

type ListAvailableEmailTemplatesResponse struct {
	ContentType string
	StatusCode  int64
}
