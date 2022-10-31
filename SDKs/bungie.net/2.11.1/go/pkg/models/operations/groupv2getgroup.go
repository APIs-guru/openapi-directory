package operations



type GroupV2GetGroupPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type GroupV2GetGroupRequest struct {
    PathParams GroupV2GetGroupPathParams 
    
}

type GroupV2GetGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

