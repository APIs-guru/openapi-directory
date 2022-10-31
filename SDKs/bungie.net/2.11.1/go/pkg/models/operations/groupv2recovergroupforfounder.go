package operations



type GroupV2RecoverGroupForFounderPathParams struct {
    GroupType int32 `pathParam:"style=simple,explode=false,name=groupType"`
    MembershipID int64 `pathParam:"style=simple,explode=false,name=membershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type GroupV2RecoverGroupForFounderRequest struct {
    PathParams GroupV2RecoverGroupForFounderPathParams 
    
}

type GroupV2RecoverGroupForFounderResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

