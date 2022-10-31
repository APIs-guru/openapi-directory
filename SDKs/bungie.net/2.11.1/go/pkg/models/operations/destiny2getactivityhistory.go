package operations



type Destiny2GetActivityHistoryPathParams struct {
    CharacterID int64 `pathParam:"style=simple,explode=false,name=characterId"`
    DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type Destiny2GetActivityHistoryQueryParams struct {
    Count *int32 `queryParam:"style=form,explode=true,name=count"`
    Mode *int32 `queryParam:"style=form,explode=true,name=mode"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    
}

type Destiny2GetActivityHistoryRequest struct {
    PathParams Destiny2GetActivityHistoryPathParams 
    QueryParams Destiny2GetActivityHistoryQueryParams 
    
}

type Destiny2GetActivityHistoryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

