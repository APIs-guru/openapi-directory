package shared

// FirewallPolicy
// <p>The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p> <p>This, along with <a>FirewallPolicyResponse</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p>
type FirewallPolicy struct {
	StatefulRuleGroupReferences     []StatefulRuleGroupReference  `json:"StatefulRuleGroupReferences,omitempty"`
	StatelessCustomActions          []CustomAction                `json:"StatelessCustomActions,omitempty"`
	StatelessDefaultActions         []string                      `json:"StatelessDefaultActions"`
	StatelessFragmentDefaultActions []string                      `json:"StatelessFragmentDefaultActions"`
	StatelessRuleGroupReferences    []StatelessRuleGroupReference `json:"StatelessRuleGroupReferences,omitempty"`
}
