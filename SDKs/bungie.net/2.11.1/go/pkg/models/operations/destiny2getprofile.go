package operations



type Destiny2GetProfilePathParams struct {
    DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type Destiny2GetProfileQueryParams struct {
    Components []int32 `queryParam:"style=form,explode=false,name=components"`
    
}

type Destiny2GetProfileRequest struct {
    PathParams Destiny2GetProfilePathParams 
    QueryParams Destiny2GetProfileQueryParams 
    
}

type Destiny2GetProfileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

