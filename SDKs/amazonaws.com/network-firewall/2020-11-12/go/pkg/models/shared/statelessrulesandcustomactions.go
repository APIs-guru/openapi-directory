package shared



type StatelessRulesAndCustomActions struct {
    CustomActions []CustomAction `json:"CustomActions,omitempty"`
    StatelessRules []StatelessRule `json:"StatelessRules"`
    
}

