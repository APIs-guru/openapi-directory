package shared

type StandardHl7ConfigurationPhoneNumberFormattingEnum string

const (
	StandardHl7ConfigurationPhoneNumberFormattingEnumStandard                 StandardHl7ConfigurationPhoneNumberFormattingEnum = "STANDARD"
	StandardHl7ConfigurationPhoneNumberFormattingEnumOnlyDigitsInComponentOne StandardHl7ConfigurationPhoneNumberFormattingEnum = "ONLY_DIGITS_IN_COMPONENT_ONE"
	StandardHl7ConfigurationPhoneNumberFormattingEnumAreaLocalInComponentOne  StandardHl7ConfigurationPhoneNumberFormattingEnum = "AREA_LOCAL_IN_COMPONENT_ONE"
)

type StandardHl7Configuration struct {
	ConvertTimestampToDateTime *string                                            `json:"convertTimestampToDateTime"`
	DefaultAoeToUnknown        *bool                                              `json:"defaultAoeToUnknown"`
	IncludeAoe                 bool                                               `json:"includeAOE"`
	NameFormat                 *string                                            `json:"nameFormat"`
	PhoneNumberFormatting      *StandardHl7ConfigurationPhoneNumberFormattingEnum `json:"phoneNumberFormatting"`
	ReceivingApplicationName   *string                                            `json:"receivingApplicationName"`
	ReceivingApplicationOid    *string                                            `json:"receivingApplicationOID"`
	ReceivingFacilityName      *string                                            `json:"receivingFacilityName"`
	ReceivingFacilityOid       *string                                            `json:"receivingFacilityOID"`
	ReceivingOrganization      *string                                            `json:"receivingOrganization"`
	ReportingFacilityID        *string                                            `json:"reportingFacilityId"`
	ReportingFacilityIDType    *string                                            `json:"reportingFacilityIdType"`
	ReportingFacilityName      *string                                            `json:"reportingFacilityName"`
	SuppressAoe                *bool                                              `json:"suppressAoe"`
	SuppressHl7Fields          *string                                            `json:"suppressHl7Fields"`
	SuppressQstForAoe          *bool                                              `json:"suppressQstForAoe"`
	Transport                  interface{}                                        `json:"transport"`
	TruncateHdNamespaceIds     *bool                                              `json:"truncateHDNamespaceIds"`
	Type                       string                                             `json:"type"`
	UseBatchHeaders            bool                                               `json:"useBatchHeaders"`
	UseBlankInsteadOfUnknown   *string                                            `json:"useBlankInsteadOfUnknown"`
	UsePid14ForPatientEmail    *bool                                              `json:"usePid14ForPatientEmail"`
	UseTestProcessingMode      *bool                                              `json:"useTestProcessingMode"`
}
