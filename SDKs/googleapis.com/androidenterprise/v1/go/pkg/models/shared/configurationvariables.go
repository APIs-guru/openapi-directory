package shared

type ConfigurationVariables struct {
	McmID       *string       `json:"mcmId"`
	VariableSet []VariableSet `json:"variableSet"`
}
