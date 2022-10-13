package operations

type ActionsCreateOrUpdateOrgSecretPathParams struct {
	Org        string `pathParam:"style=simple,explode=false,name=org"`
	SecretName string `pathParam:"style=simple,explode=false,name=secret_name"`
}

type ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum string

const (
	ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnumAll      ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum = "all"
	ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnumPrivate  ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum = "private"
	ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnumSelected ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum = "selected"
)

type ActionsCreateOrUpdateOrgSecretRequestBody struct {
	EncryptedValue        *string                                                  `json:"encrypted_value"`
	KeyID                 *string                                                  `json:"key_id"`
	SelectedRepositoryIds []string                                                 `json:"selected_repository_ids"`
	Visibility            *ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum `json:"visibility"`
}

type ActionsCreateOrUpdateOrgSecretRequest struct {
	PathParams ActionsCreateOrUpdateOrgSecretPathParams
	Request    *ActionsCreateOrUpdateOrgSecretRequestBody `request:"mediaType=application/json"`
}

type ActionsCreateOrUpdateOrgSecretResponse struct {
	ContentType string
	StatusCode  int64
}
