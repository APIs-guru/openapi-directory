package shared



type FirewallPolicy struct {
    StatefulRuleGroupReferences []StatefulRuleGroupReference `json:"StatefulRuleGroupReferences,omitempty"`
    StatelessCustomActions []CustomAction `json:"StatelessCustomActions,omitempty"`
    StatelessDefaultActions []string `json:"StatelessDefaultActions"`
    StatelessFragmentDefaultActions []string `json:"StatelessFragmentDefaultActions"`
    StatelessRuleGroupReferences []StatelessRuleGroupReference `json:"StatelessRuleGroupReferences,omitempty"`
    
}

