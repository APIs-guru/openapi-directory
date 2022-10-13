package shared

type GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum string

const (
	GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnumInterfaceTypeUnspecified GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum = "INTERFACE_TYPE_UNSPECIFIED"
	GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnumBond                     GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum = "BOND"
	GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnumNic                      GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum = "NIC"
)

type GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface struct {
	Name     *string                                                                      `json:"name"`
	Required *bool                                                                        `json:"required"`
	Type     *GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum `json:"type"`
}
