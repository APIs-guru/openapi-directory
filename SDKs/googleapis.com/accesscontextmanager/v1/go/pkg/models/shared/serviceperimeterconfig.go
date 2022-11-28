package shared

// ServicePerimeterConfig
// `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
type ServicePerimeterConfig struct {
	AccessLevels          []string               `json:"accessLevels,omitempty"`
	EgressPolicies        []EgressPolicy         `json:"egressPolicies,omitempty"`
	IngressPolicies       []IngressPolicy        `json:"ingressPolicies,omitempty"`
	Resources             []string               `json:"resources,omitempty"`
	RestrictedServices    []string               `json:"restrictedServices,omitempty"`
	VpcAccessibleServices *VpcAccessibleServices `json:"vpcAccessibleServices,omitempty"`
}
