package operations



type Destiny2GetCharacterPathParams struct {
    CharacterID int64 `pathParam:"style=simple,explode=false,name=characterId"`
    DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type Destiny2GetCharacterQueryParams struct {
    Components []int32 `queryParam:"style=form,explode=false,name=components"`
    
}

type Destiny2GetCharacterRequest struct {
    PathParams Destiny2GetCharacterPathParams 
    QueryParams Destiny2GetCharacterQueryParams 
    
}

type Destiny2GetCharacterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

