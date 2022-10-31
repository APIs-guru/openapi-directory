package shared



type ServicePerimeterConfig struct {
    AccessLevels []string `json:"accessLevels,omitempty"`
    Resources []string `json:"resources,omitempty"`
    RestrictedServices []string `json:"restrictedServices,omitempty"`
    UnrestrictedServices []string `json:"unrestrictedServices,omitempty"`
    VpcAccessibleServices *VpcAccessibleServices `json:"vpcAccessibleServices,omitempty"`
    
}

