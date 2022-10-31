package operations

import (
"openapi/pkg/models/shared")

type MigrationsGetLargeFilesPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type MigrationsGetLargeFilesRequest struct {
    PathParams MigrationsGetLargeFilesPathParams 
    
}

type MigrationsGetLargeFilesResponse struct {
    ContentType string 
    StatusCode int64 
    PorterLargeFiles []shared.PorterLargeFile 
    
}

