package operations



type GetDomainsTldZoneIDDownloadPathParams struct {
    ZoneID string `pathParam:"style=simple,explode=false,name=zone_id"`
    
}

type GetDomainsTldZoneIDDownloadQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    Date *string `queryParam:"style=form,explode=true,name=date"`
    
}

type GetDomainsTldZoneIDDownloadRequest struct {
    PathParams GetDomainsTldZoneIDDownloadPathParams 
    QueryParams GetDomainsTldZoneIDDownloadQueryParams 
    
}

type GetDomainsTldZoneIDDownloadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

