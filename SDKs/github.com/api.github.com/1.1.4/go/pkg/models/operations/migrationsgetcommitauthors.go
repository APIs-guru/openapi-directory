package operations

import (
"openapi/pkg/models/shared")

type MigrationsGetCommitAuthorsPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type MigrationsGetCommitAuthorsQueryParams struct {
    Since *int64 `queryParam:"style=form,explode=true,name=since"`
    
}

type MigrationsGetCommitAuthorsRequest struct {
    PathParams MigrationsGetCommitAuthorsPathParams 
    QueryParams MigrationsGetCommitAuthorsQueryParams 
    
}

type MigrationsGetCommitAuthorsResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    PorterAuthors []shared.PorterAuthor 
    
}

