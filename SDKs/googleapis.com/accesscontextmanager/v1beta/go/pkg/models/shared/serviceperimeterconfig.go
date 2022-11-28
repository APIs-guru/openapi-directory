package shared

// ServicePerimeterConfig
// `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
type ServicePerimeterConfig struct {
	AccessLevels          []string               `json:"accessLevels,omitempty"`
	Resources             []string               `json:"resources,omitempty"`
	RestrictedServices    []string               `json:"restrictedServices,omitempty"`
	UnrestrictedServices  []string               `json:"unrestrictedServices,omitempty"`
	VpcAccessibleServices *VpcAccessibleServices `json:"vpcAccessibleServices,omitempty"`
}
