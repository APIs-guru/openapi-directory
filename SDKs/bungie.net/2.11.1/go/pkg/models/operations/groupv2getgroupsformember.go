package operations



type GroupV2GetGroupsForMemberPathParams struct {
    Filter int32 `pathParam:"style=simple,explode=false,name=filter"`
    GroupType int32 `pathParam:"style=simple,explode=false,name=groupType"`
    MembershipID int64 `pathParam:"style=simple,explode=false,name=membershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type GroupV2GetGroupsForMemberRequest struct {
    PathParams GroupV2GetGroupsForMemberPathParams 
    
}

type GroupV2GetGroupsForMemberResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

