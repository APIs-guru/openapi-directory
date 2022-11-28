package shared

// ServerNetworkTemplate
// Network template.
type ServerNetworkTemplate struct {
	ApplicableInstanceTypes []string                                                              `json:"applicableInstanceTypes,omitempty"`
	LogicalInterfaces       []GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface `json:"logicalInterfaces,omitempty"`
	Name                    *string                                                               `json:"name,omitempty"`
}
