package shared



type ConfigurationVariables struct {
    McmID *string `json:"mcmId,omitempty"`
    VariableSet []VariableSet `json:"variableSet,omitempty"`
    
}

