package operations

type ListAvailableContentBlocksQueryParams struct {
	Limit          *string `queryParam:"style=form,explode=true,name=limit"`
	ModifiedAfter  *string `queryParam:"style=form,explode=true,name=modified_after"`
	ModifiedBefore *string `queryParam:"style=form,explode=true,name=modified_before"`
	Offset         *string `queryParam:"style=form,explode=true,name=offset"`
}

type ListAvailableContentBlocksRequest struct {
	QueryParams ListAvailableContentBlocksQueryParams
}

type ListAvailableContentBlocksResponse struct {
	ContentType string
	StatusCode  int64
}
