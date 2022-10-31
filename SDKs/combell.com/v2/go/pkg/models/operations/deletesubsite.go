package operations



type DeleteSubsitePathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    SiteName string `pathParam:"style=simple,explode=false,name=siteName"`
    
}

type DeleteSubsiteQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    SiteName string `queryParam:"style=form,explode=true,name=site_name"`
    
}

type DeleteSubsiteRequest struct {
    PathParams DeleteSubsitePathParams 
    QueryParams DeleteSubsiteQueryParams 
    
}

type DeleteSubsiteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

