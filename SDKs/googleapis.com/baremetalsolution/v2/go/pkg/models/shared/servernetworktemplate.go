package shared

type ServerNetworkTemplate struct {
	ApplicableInstanceTypes []string                                                              `json:"applicableInstanceTypes"`
	LogicalInterfaces       []GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface `json:"logicalInterfaces"`
	Name                    *string                                                               `json:"name"`
}
