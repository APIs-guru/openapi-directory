package operations

import (
"openapi/pkg/models/shared")

type CodesOfConductGetForRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type CodesOfConductGetForRepoRequest struct {
    PathParams CodesOfConductGetForRepoPathParams 
    
}

type CodesOfConductGetForRepoResponse struct {
    ContentType string 
    StatusCode int64 
    CodeOfConduct *shared.CodeOfConduct 
    
}

