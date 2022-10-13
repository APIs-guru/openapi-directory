package shared

type ClaimDeviceRequestSectionTypeEnum string

const (
	ClaimDeviceRequestSectionTypeEnumSectionTypeUnspecified ClaimDeviceRequestSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	ClaimDeviceRequestSectionTypeEnumSectionTypeSimLock     ClaimDeviceRequestSectionTypeEnum = "SECTION_TYPE_SIM_LOCK"
	ClaimDeviceRequestSectionTypeEnumSectionTypeZeroTouch   ClaimDeviceRequestSectionTypeEnum = "SECTION_TYPE_ZERO_TOUCH"
)

type ClaimDeviceRequest struct {
	CustomerID       *string                            `json:"customerId"`
	DeviceIdentifier *DeviceIdentifier                  `json:"deviceIdentifier"`
	DeviceMetadata   *DeviceMetadata                    `json:"deviceMetadata"`
	SectionType      *ClaimDeviceRequestSectionTypeEnum `json:"sectionType"`
}
