package shared

type CreateServiceActionInput struct {
	AcceptLanguage   *string                         `json:"AcceptLanguage"`
	Definition       map[string]string               `json:"Definition"`
	DefinitionType   ServiceActionDefinitionTypeEnum `json:"DefinitionType"`
	Description      *string                         `json:"Description"`
	IdempotencyToken string                          `json:"IdempotencyToken"`
	Name             string                          `json:"Name"`
}
