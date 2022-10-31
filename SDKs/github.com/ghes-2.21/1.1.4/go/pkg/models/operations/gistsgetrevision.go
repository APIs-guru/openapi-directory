package operations

import (
"openapi/pkg/models/shared")

type GistsGetRevisionPathParams struct {
    GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
    Sha string `pathParam:"style=simple,explode=false,name=sha"`
    
}

type GistsGetRevisionRequest struct {
    PathParams GistsGetRevisionPathParams 
    
}

type GistsGetRevisionResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    GistSimple *shared.GistSimple 
    ValidationError *shared.ValidationError 
    
}

