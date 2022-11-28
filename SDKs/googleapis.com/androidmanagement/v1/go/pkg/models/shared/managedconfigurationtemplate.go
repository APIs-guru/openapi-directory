package shared

// ManagedConfigurationTemplate
// The managed configurations template for the app, saved from the managed configurations iframe.
type ManagedConfigurationTemplate struct {
	ConfigurationVariables map[string]string `json:"configurationVariables,omitempty"`
	TemplateID             *string           `json:"templateId,omitempty"`
}
