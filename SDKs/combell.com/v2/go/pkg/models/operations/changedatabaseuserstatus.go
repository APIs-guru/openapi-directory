package operations

import (
"openapi/pkg/models/shared")

type ChangeDatabaseUserStatusPathParams struct {
    DatabaseName string `pathParam:"style=simple,explode=false,name=databaseName"`
    UserName string `pathParam:"style=simple,explode=false,name=userName"`
    
}

type ChangeDatabaseUserStatusQueryParams struct {
    DatabaseName string `queryParam:"style=form,explode=true,name=database_name"`
    UserName string `queryParam:"style=form,explode=true,name=user_name"`
    
}

type ChangeDatabaseUserStatusRequest struct {
    PathParams ChangeDatabaseUserStatusPathParams 
    QueryParams ChangeDatabaseUserStatusQueryParams 
    Request *shared.UpdateUserStatusRequest `request:"mediaType=application/json"`
    
}

type ChangeDatabaseUserStatusResponse struct {
    ContentType string 
    StatusCode int64 
    
}

