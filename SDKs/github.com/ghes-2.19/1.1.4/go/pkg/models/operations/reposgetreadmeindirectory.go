package operations

import (
"openapi/pkg/models/shared")

type ReposGetReadmeInDirectoryPathParams struct {
    Dir string `pathParam:"style=simple,explode=false,name=dir"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetReadmeInDirectoryQueryParams struct {
    Ref *string `queryParam:"style=form,explode=true,name=ref"`
    
}

type ReposGetReadmeInDirectoryRequest struct {
    PathParams ReposGetReadmeInDirectoryPathParams 
    QueryParams ReposGetReadmeInDirectoryQueryParams 
    
}

type ReposGetReadmeInDirectoryResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ContentFile *shared.ContentFile 
    ValidationError *shared.ValidationError 
    
}

