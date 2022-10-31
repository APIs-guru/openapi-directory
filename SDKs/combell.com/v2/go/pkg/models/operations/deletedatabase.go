package operations



type DeleteDatabasePathParams struct {
    DatabaseName string `pathParam:"style=simple,explode=false,name=databaseName"`
    
}

type DeleteDatabaseQueryParams struct {
    DatabaseName string `queryParam:"style=form,explode=true,name=database_name"`
    
}

type DeleteDatabaseRequest struct {
    PathParams DeleteDatabasePathParams 
    QueryParams DeleteDatabaseQueryParams 
    
}

type DeleteDatabaseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

