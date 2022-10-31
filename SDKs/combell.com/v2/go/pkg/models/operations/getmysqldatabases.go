package operations

import (
"openapi/pkg/models/shared")

type GetMySQLDatabasesQueryParams struct {
    Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
    Take *int32 `queryParam:"style=form,explode=true,name=take"`
    
}

type GetMySQLDatabasesRequest struct {
    QueryParams GetMySQLDatabasesQueryParams 
    
}

type GetMySQLDatabasesResponse struct {
    ContentType string 
    Headers map[string][]string 
    MySQLDatabases []shared.MySQLDatabase 
    StatusCode int64 
    
}

