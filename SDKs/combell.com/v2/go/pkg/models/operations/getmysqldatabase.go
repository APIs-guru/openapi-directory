package operations

import (
"openapi/pkg/models/shared")

type GetMySQLDatabasePathParams struct {
    DatabaseName string `pathParam:"style=simple,explode=false,name=databaseName"`
    
}

type GetMySQLDatabaseQueryParams struct {
    DatabaseName string `queryParam:"style=form,explode=true,name=database_name"`
    
}

type GetMySQLDatabaseRequest struct {
    PathParams GetMySQLDatabasePathParams 
    QueryParams GetMySQLDatabaseQueryParams 
    
}

type GetMySQLDatabaseResponse struct {
    ContentType string 
    MySQLDatabase *shared.MySQLDatabase 
    StatusCode int64 
    
}

