package operations

import (
"time"
"openapi/pkg/models/shared")


type ListServicesServiceTypeEnum string

const (
    ListServicesServiceTypeEnumInteractive ListServicesServiceTypeEnum = "Interactive"
ListServicesServiceTypeEnumLocalRadio ListServicesServiceTypeEnum = "Local Radio"
ListServicesServiceTypeEnumMasterBrandOnly ListServicesServiceTypeEnum = "Master Brand Only"
ListServicesServiceTypeEnumNationalRadio ListServicesServiceTypeEnum = "National Radio"
ListServicesServiceTypeEnumOnDemand ListServicesServiceTypeEnum = "On Demand"
ListServicesServiceTypeEnumRegionalRadio ListServicesServiceTypeEnum = "Regional Radio"
ListServicesServiceTypeEnumSimulcast ListServicesServiceTypeEnum = "Simulcast"
ListServicesServiceTypeEnumTv ListServicesServiceTypeEnum = "TV"
ListServicesServiceTypeEnumWebOnly ListServicesServiceTypeEnum = "Web Only"
ListServicesServiceTypeEnumWebcast ListServicesServiceTypeEnum = "Webcast"
)


type ListServicesQueryParams struct {
    EndFrom *time.Time `queryParam:"style=form,explode=true,name=end_from"`
    EndTo *time.Time `queryParam:"style=form,explode=true,name=end_to"`
    Mid []string `queryParam:"style=form,explode=true,name=mid"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    PartnerID []string `queryParam:"style=form,explode=true,name=partner_id"`
    PartnerPid []string `queryParam:"style=form,explode=true,name=partner_pid"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    ServiceType []ListServicesServiceTypeEnum `queryParam:"style=form,explode=true,name=service_type"`
    Sid []string `queryParam:"style=form,explode=true,name=sid"`
    StartFrom *time.Time `queryParam:"style=form,explode=true,name=start_from"`
    StartTo *time.Time `queryParam:"style=form,explode=true,name=start_to"`
    
}

type ListServicesRequest struct {
    QueryParams ListServicesQueryParams 
    
}

type ListServicesResponse struct {
    Body []byte 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Nitro *interface{} 
    
}

