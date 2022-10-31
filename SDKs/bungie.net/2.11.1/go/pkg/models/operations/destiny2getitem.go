package operations



type Destiny2GetItemPathParams struct {
    DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
    ItemInstanceID int64 `pathParam:"style=simple,explode=false,name=itemInstanceId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type Destiny2GetItemQueryParams struct {
    Components []int32 `queryParam:"style=form,explode=false,name=components"`
    
}

type Destiny2GetItemRequest struct {
    PathParams Destiny2GetItemPathParams 
    QueryParams Destiny2GetItemQueryParams 
    
}

type Destiny2GetItemResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

