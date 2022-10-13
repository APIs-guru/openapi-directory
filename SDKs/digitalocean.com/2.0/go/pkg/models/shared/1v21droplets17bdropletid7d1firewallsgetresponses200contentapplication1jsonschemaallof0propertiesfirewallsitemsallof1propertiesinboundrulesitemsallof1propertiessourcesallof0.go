package shared

type Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 struct {
	Addresses        []string `json:"addresses"`
	DropletIds       []int64  `json:"droplet_ids"`
	KubernetesIds    []string `json:"kubernetes_ids"`
	LoadBalancerUids []string `json:"load_balancer_uids"`
	Tags             []string `json:"tags"`
}
