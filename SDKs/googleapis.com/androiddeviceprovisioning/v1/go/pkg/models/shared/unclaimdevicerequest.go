package shared

type UnclaimDeviceRequestSectionTypeEnum string

const (
	UnclaimDeviceRequestSectionTypeEnumSectionTypeUnspecified UnclaimDeviceRequestSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	UnclaimDeviceRequestSectionTypeEnumSectionTypeSimLock     UnclaimDeviceRequestSectionTypeEnum = "SECTION_TYPE_SIM_LOCK"
	UnclaimDeviceRequestSectionTypeEnumSectionTypeZeroTouch   UnclaimDeviceRequestSectionTypeEnum = "SECTION_TYPE_ZERO_TOUCH"
)

type UnclaimDeviceRequest struct {
	DeviceID               *string                              `json:"deviceId"`
	DeviceIdentifier       *DeviceIdentifier                    `json:"deviceIdentifier"`
	SectionType            *UnclaimDeviceRequestSectionTypeEnum `json:"sectionType"`
	VacationModeDays       *int32                               `json:"vacationModeDays"`
	VacationModeExpireTime *string                              `json:"vacationModeExpireTime"`
}
