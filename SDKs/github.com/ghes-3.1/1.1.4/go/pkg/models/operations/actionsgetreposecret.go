package operations

import (
"openapi/pkg/models/shared")

type ActionsGetRepoSecretPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    SecretName string `pathParam:"style=simple,explode=false,name=secret_name"`
    
}

type ActionsGetRepoSecretRequest struct {
    PathParams ActionsGetRepoSecretPathParams 
    
}

type ActionsGetRepoSecretResponse struct {
    ContentType string 
    StatusCode int64 
    ActionsSecret *shared.ActionsSecret 
    
}

