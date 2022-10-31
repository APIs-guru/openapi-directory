package operations

type ActionsCreateOrUpdateEnvironmentSecretPathParams struct {
	EnvironmentName string `pathParam:"style=simple,explode=false,name=environment_name"`
	RepositoryID    int64  `pathParam:"style=simple,explode=false,name=repository_id"`
	SecretName      string `pathParam:"style=simple,explode=false,name=secret_name"`
}

type ActionsCreateOrUpdateEnvironmentSecretRequestBody struct {
	EncryptedValue *string `json:"encrypted_value,omitempty"`
	KeyID          *string `json:"key_id,omitempty"`
}

type ActionsCreateOrUpdateEnvironmentSecretRequest struct {
	PathParams ActionsCreateOrUpdateEnvironmentSecretPathParams
	Request    *ActionsCreateOrUpdateEnvironmentSecretRequestBody `request:"mediaType=application/json"`
}

type ActionsCreateOrUpdateEnvironmentSecretResponse struct {
	ContentType string
	StatusCode  int64
}
