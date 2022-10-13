package shared

type FirewallPolicy struct {
	StatefulRuleGroupReferences     []StatefulRuleGroupReference  `json:"StatefulRuleGroupReferences"`
	StatelessCustomActions          []CustomAction                `json:"StatelessCustomActions"`
	StatelessDefaultActions         []string                      `json:"StatelessDefaultActions"`
	StatelessFragmentDefaultActions []string                      `json:"StatelessFragmentDefaultActions"`
	StatelessRuleGroupReferences    []StatelessRuleGroupReference `json:"StatelessRuleGroupReferences"`
}
