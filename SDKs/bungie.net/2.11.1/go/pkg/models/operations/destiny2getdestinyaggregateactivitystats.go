package operations



type Destiny2GetDestinyAggregateActivityStatsPathParams struct {
    CharacterID int64 `pathParam:"style=simple,explode=false,name=characterId"`
    DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type Destiny2GetDestinyAggregateActivityStatsRequest struct {
    PathParams Destiny2GetDestinyAggregateActivityStatsPathParams 
    
}

type Destiny2GetDestinyAggregateActivityStatsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

