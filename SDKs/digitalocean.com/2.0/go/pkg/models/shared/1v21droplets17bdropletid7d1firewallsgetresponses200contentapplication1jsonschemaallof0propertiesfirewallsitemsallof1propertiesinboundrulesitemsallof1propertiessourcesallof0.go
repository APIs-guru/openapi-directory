package shared

type Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 struct {
	Addresses        []string `json:"addresses,omitempty"`
	DropletIds       []int64  `json:"droplet_ids,omitempty"`
	KubernetesIds    []string `json:"kubernetes_ids,omitempty"`
	LoadBalancerUids []string `json:"load_balancer_uids,omitempty"`
	Tags             []string `json:"tags,omitempty"`
}
