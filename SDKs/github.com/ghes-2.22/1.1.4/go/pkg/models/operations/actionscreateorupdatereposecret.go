package operations



type ActionsCreateOrUpdateRepoSecretPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    SecretName string `pathParam:"style=simple,explode=false,name=secret_name"`
    
}

type ActionsCreateOrUpdateRepoSecretRequestBody struct {
    EncryptedValue *string `json:"encrypted_value,omitempty"`
    KeyID *string `json:"key_id,omitempty"`
    
}

type ActionsCreateOrUpdateRepoSecretRequest struct {
    PathParams ActionsCreateOrUpdateRepoSecretPathParams 
    Request *ActionsCreateOrUpdateRepoSecretRequestBody `request:"mediaType=application/json"`
    
}

type ActionsCreateOrUpdateRepoSecretResponse struct {
    ContentType string 
    StatusCode int64 
    ActionsCreateOrUpdateRepoSecret201ApplicationJSONObject map[string]interface{} 
    
}

