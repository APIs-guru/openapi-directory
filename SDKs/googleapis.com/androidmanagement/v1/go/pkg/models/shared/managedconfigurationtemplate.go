package shared

type ManagedConfigurationTemplate struct {
	ConfigurationVariables map[string]string `json:"configurationVariables"`
	TemplateID             *string           `json:"templateId"`
}
