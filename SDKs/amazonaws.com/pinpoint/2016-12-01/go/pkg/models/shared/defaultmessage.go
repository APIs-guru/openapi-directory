package shared



type DefaultMessage struct {
    Body *string `json:"Body,omitempty"`
    Substitutions map[string][]string `json:"Substitutions,omitempty"`
    
}

