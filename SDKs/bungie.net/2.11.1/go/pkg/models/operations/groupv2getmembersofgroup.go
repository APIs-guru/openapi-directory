package operations



type GroupV2GetMembersOfGroupPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type GroupV2GetMembersOfGroupQueryParams struct {
    Currentpage int32 `queryParam:"style=form,explode=true,name=currentpage"`
    MemberType *int32 `queryParam:"style=form,explode=true,name=memberType"`
    NameSearch *string `queryParam:"style=form,explode=true,name=nameSearch"`
    
}

type GroupV2GetMembersOfGroupRequest struct {
    PathParams GroupV2GetMembersOfGroupPathParams 
    QueryParams GroupV2GetMembersOfGroupQueryParams 
    
}

type GroupV2GetMembersOfGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

