package operations

import (
"openapi/pkg/models/shared")


type ListVersionsAvailabilityEnum string

const (
    ListVersionsAvailabilityEnumAvailable ListVersionsAvailabilityEnum = "available"
)



type ListVersionsEmbargoedEnum string

const (
    ListVersionsEmbargoedEnumInclude ListVersionsEmbargoedEnum = "include"
ListVersionsEmbargoedEnumExclude ListVersionsEmbargoedEnum = "exclude"
ListVersionsEmbargoedEnumOnly ListVersionsEmbargoedEnum = "only"
)



type ListVersionsPaymentTypeEnum string

const (
    ListVersionsPaymentTypeEnumFree ListVersionsPaymentTypeEnum = "free"
ListVersionsPaymentTypeEnumBbcstore ListVersionsPaymentTypeEnum = "bbcstore"
ListVersionsPaymentTypeEnumUscansvod ListVersionsPaymentTypeEnum = "uscansvod"
)


type ListVersionsQueryParams struct {
    Availability []ListVersionsAvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    DescendantsOf []string `queryParam:"style=form,explode=true,name=descendants_of"`
    Embargoed *ListVersionsEmbargoedEnum `queryParam:"style=form,explode=true,name=embargoed"`
    MediaSet []string `queryParam:"style=form,explode=true,name=media_set"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    PartnerID []string `queryParam:"style=form,explode=true,name=partner_id"`
    PartnerPid []string `queryParam:"style=form,explode=true,name=partner_pid"`
    PaymentType []ListVersionsPaymentTypeEnum `queryParam:"style=form,explode=true,name=payment_type"`
    Pid []string `queryParam:"style=form,explode=true,name=pid"`
    
}

type ListVersionsRequest struct {
    QueryParams ListVersionsQueryParams 
    
}

type ListVersionsResponse struct {
    Body []byte 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Nitro *interface{} 
    
}

