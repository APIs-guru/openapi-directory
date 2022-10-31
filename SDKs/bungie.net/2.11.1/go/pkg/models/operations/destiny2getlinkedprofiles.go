package operations



type Destiny2GetLinkedProfilesPathParams struct {
    MembershipID int64 `pathParam:"style=simple,explode=false,name=membershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type Destiny2GetLinkedProfilesQueryParams struct {
    GetAllMemberships *bool `queryParam:"style=form,explode=true,name=getAllMemberships"`
    
}

type Destiny2GetLinkedProfilesRequest struct {
    PathParams Destiny2GetLinkedProfilesPathParams 
    QueryParams Destiny2GetLinkedProfilesQueryParams 
    
}

type Destiny2GetLinkedProfilesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

