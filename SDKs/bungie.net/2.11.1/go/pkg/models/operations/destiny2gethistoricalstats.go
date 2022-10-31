package operations

import (
"time")

type Destiny2GetHistoricalStatsPathParams struct {
    CharacterID int64 `pathParam:"style=simple,explode=false,name=characterId"`
    DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type Destiny2GetHistoricalStatsQueryParams struct {
    Dayend *time.Time `queryParam:"style=form,explode=true,name=dayend"`
    Daystart *time.Time `queryParam:"style=form,explode=true,name=daystart"`
    Groups []int32 `queryParam:"style=form,explode=false,name=groups"`
    Modes []int32 `queryParam:"style=form,explode=false,name=modes"`
    PeriodType *int32 `queryParam:"style=form,explode=true,name=periodType"`
    
}

type Destiny2GetHistoricalStatsRequest struct {
    PathParams Destiny2GetHistoricalStatsPathParams 
    QueryParams Destiny2GetHistoricalStatsQueryParams 
    
}

type Destiny2GetHistoricalStatsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

