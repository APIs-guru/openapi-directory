package operations



type ActionsSetSelectedReposForOrgSecretPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    SecretName string `pathParam:"style=simple,explode=false,name=secret_name"`
    
}

type ActionsSetSelectedReposForOrgSecretRequestBody struct {
    SelectedRepositoryIds []int64 `json:"selected_repository_ids,omitempty"`
    
}

type ActionsSetSelectedReposForOrgSecretRequest struct {
    PathParams ActionsSetSelectedReposForOrgSecretPathParams 
    Request *ActionsSetSelectedReposForOrgSecretRequestBody `request:"mediaType=application/json"`
    
}

type ActionsSetSelectedReposForOrgSecretResponse struct {
    ContentType string 
    StatusCode int64 
    
}

