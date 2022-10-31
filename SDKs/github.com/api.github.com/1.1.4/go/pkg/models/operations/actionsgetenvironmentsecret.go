package operations

import (
"openapi/pkg/models/shared")

type ActionsGetEnvironmentSecretPathParams struct {
    EnvironmentName string `pathParam:"style=simple,explode=false,name=environment_name"`
    RepositoryID int64 `pathParam:"style=simple,explode=false,name=repository_id"`
    SecretName string `pathParam:"style=simple,explode=false,name=secret_name"`
    
}

type ActionsGetEnvironmentSecretRequest struct {
    PathParams ActionsGetEnvironmentSecretPathParams 
    
}

type ActionsGetEnvironmentSecretResponse struct {
    ContentType string 
    StatusCode int64 
    ActionsSecret *shared.ActionsSecret 
    
}

