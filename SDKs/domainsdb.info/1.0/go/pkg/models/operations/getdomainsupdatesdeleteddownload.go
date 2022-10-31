package operations



type GetDomainsUpdatesDeletedDownloadQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    Date *string `queryParam:"style=form,explode=true,name=date"`
    
}

type GetDomainsUpdatesDeletedDownloadRequest struct {
    QueryParams GetDomainsUpdatesDeletedDownloadQueryParams 
    
}

type GetDomainsUpdatesDeletedDownloadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

