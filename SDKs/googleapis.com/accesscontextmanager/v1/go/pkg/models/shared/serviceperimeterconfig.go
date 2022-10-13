package shared

type ServicePerimeterConfig struct {
	AccessLevels          []string               `json:"accessLevels"`
	EgressPolicies        []EgressPolicy         `json:"egressPolicies"`
	IngressPolicies       []IngressPolicy        `json:"ingressPolicies"`
	Resources             []string               `json:"resources"`
	RestrictedServices    []string               `json:"restrictedServices"`
	VpcAccessibleServices *VpcAccessibleServices `json:"vpcAccessibleServices"`
}
