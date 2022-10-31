package operations



type GroupV2GetAdminsAndFounderOfGroupPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type GroupV2GetAdminsAndFounderOfGroupQueryParams struct {
    Currentpage int32 `queryParam:"style=form,explode=true,name=currentpage"`
    
}

type GroupV2GetAdminsAndFounderOfGroupRequest struct {
    PathParams GroupV2GetAdminsAndFounderOfGroupPathParams 
    QueryParams GroupV2GetAdminsAndFounderOfGroupQueryParams 
    
}

type GroupV2GetAdminsAndFounderOfGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

