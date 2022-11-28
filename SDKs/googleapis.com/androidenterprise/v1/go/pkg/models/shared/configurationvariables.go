package shared

// ConfigurationVariables
// A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings.
type ConfigurationVariables struct {
	McmID       *string       `json:"mcmId,omitempty"`
	VariableSet []VariableSet `json:"variableSet,omitempty"`
}
