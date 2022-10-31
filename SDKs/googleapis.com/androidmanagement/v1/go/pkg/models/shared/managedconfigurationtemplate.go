package shared

type ManagedConfigurationTemplate struct {
	ConfigurationVariables map[string]string `json:"configurationVariables,omitempty"`
	TemplateID             *string           `json:"templateId,omitempty"`
}
