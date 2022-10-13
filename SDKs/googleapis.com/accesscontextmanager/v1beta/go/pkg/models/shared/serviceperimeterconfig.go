package shared

type ServicePerimeterConfig struct {
	AccessLevels          []string               `json:"accessLevels"`
	Resources             []string               `json:"resources"`
	RestrictedServices    []string               `json:"restrictedServices"`
	UnrestrictedServices  []string               `json:"unrestrictedServices"`
	VpcAccessibleServices *VpcAccessibleServices `json:"vpcAccessibleServices"`
}
