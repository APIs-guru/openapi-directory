package operations



type Destiny2GetLeaderboardsPathParams struct {
    DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type Destiny2GetLeaderboardsQueryParams struct {
    Maxtop *int32 `queryParam:"style=form,explode=true,name=maxtop"`
    Modes *string `queryParam:"style=form,explode=true,name=modes"`
    Statid *string `queryParam:"style=form,explode=true,name=statid"`
    
}

type Destiny2GetLeaderboardsRequest struct {
    PathParams Destiny2GetLeaderboardsPathParams 
    QueryParams Destiny2GetLeaderboardsQueryParams 
    
}

type Destiny2GetLeaderboardsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

