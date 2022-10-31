package shared

type ServiceActionSummary struct {
	DefinitionType *ServiceActionDefinitionTypeEnum `json:"DefinitionType,omitempty"`
	Description    *string                          `json:"Description,omitempty"`
	ID             *string                          `json:"Id,omitempty"`
	Name           *string                          `json:"Name,omitempty"`
}
