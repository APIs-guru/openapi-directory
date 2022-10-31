package operations

type GetDomainsUpdatesAddedDownloadQueryParams struct {
	APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
	Date   *string `queryParam:"style=form,explode=true,name=date"`
}

type GetDomainsUpdatesAddedDownloadRequest struct {
	QueryParams GetDomainsUpdatesAddedDownloadQueryParams
}

type GetDomainsUpdatesAddedDownloadResponse struct {
	ContentType string
	StatusCode  int64
}
