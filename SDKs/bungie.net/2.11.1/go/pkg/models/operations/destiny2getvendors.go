package operations



type Destiny2GetVendorsPathParams struct {
    CharacterID int64 `pathParam:"style=simple,explode=false,name=characterId"`
    DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type Destiny2GetVendorsQueryParams struct {
    Components []int32 `queryParam:"style=form,explode=false,name=components"`
    Filter *int32 `queryParam:"style=form,explode=true,name=filter"`
    
}

type Destiny2GetVendorsRequest struct {
    PathParams Destiny2GetVendorsPathParams 
    QueryParams Destiny2GetVendorsQueryParams 
    
}

type Destiny2GetVendorsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

