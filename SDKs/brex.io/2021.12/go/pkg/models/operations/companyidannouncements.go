package operations

import (
"openapi/pkg/models/shared")

type CompanyIDAnnouncementsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type CompanyIDAnnouncementsQueryParams struct {
    Data *bool `queryParam:"style=form,explode=true,name=data"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type CompanyIDAnnouncementsSecurity struct {
    UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CompanyIDAnnouncementsRequest struct {
    PathParams CompanyIDAnnouncementsPathParams 
    QueryParams CompanyIDAnnouncementsQueryParams 
    Security CompanyIDAnnouncementsSecurity 
    
}

type CompanyIDAnnouncementsResponse struct {
    CompanyIDAnnouncements200ApplicationJSONAnies []interface{} 
    CompanyIDAnnouncementsDefaultApplicationJSONAny *interface{} 
    ContentType string 
    StatusCode int64 
    
}

