package operations



type DeleteGroupUsersIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteGroupUsersIDQueryParams struct {
    GroupID int32 `queryParam:"style=form,explode=true,name=group_id"`
    UserID int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type DeleteGroupUsersIDRequest struct {
    PathParams DeleteGroupUsersIDPathParams 
    QueryParams DeleteGroupUsersIDQueryParams 
    
}

type DeleteGroupUsersIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

