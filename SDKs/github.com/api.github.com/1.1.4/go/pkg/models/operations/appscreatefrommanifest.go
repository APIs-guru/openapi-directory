package operations

import (
"openapi/pkg/models/shared")

type AppsCreateFromManifestPathParams struct {
    Code string `pathParam:"style=simple,explode=false,name=code"`
    
}

type AppsCreateFromManifestRequest struct {
    PathParams AppsCreateFromManifestPathParams 
    
}

type AppsCreateFromManifestResponse struct {
    ContentType string 
    GitHubApp map[string]interface{} 
    StatusCode int64 
    BasicError *shared.BasicError 
    ValidationErrorSimple *shared.ValidationErrorSimple 
    
}

