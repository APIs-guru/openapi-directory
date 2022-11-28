package shared

// UserEmailViewDefinition
// Represents a data-driven view for Email settings. Web/Mobile UI can use this data to show new EMail settings consistently without further manual work.
type UserEmailViewDefinition struct {
	Name         *string
	ViewSettings []UserEmailViewDefinitionSetting
}
