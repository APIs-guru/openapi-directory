package shared

type ServiceActionSummary struct {
	DefinitionType *ServiceActionDefinitionTypeEnum `json:"DefinitionType"`
	Description    *string                          `json:"Description"`
	ID             *string                          `json:"Id"`
	Name           *string                          `json:"Name"`
}
