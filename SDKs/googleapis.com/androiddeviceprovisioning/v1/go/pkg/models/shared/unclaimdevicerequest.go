package shared




type UnclaimDeviceRequestSectionTypeEnum string

const (
    UnclaimDeviceRequestSectionTypeEnumSectionTypeUnspecified UnclaimDeviceRequestSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
UnclaimDeviceRequestSectionTypeEnumSectionTypeSimLock UnclaimDeviceRequestSectionTypeEnum = "SECTION_TYPE_SIM_LOCK"
UnclaimDeviceRequestSectionTypeEnumSectionTypeZeroTouch UnclaimDeviceRequestSectionTypeEnum = "SECTION_TYPE_ZERO_TOUCH"
)


type UnclaimDeviceRequest struct {
    DeviceID *string `json:"deviceId,omitempty"`
    DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier,omitempty"`
    SectionType *UnclaimDeviceRequestSectionTypeEnum `json:"sectionType,omitempty"`
    VacationModeDays *int32 `json:"vacationModeDays,omitempty"`
    VacationModeExpireTime *string `json:"vacationModeExpireTime,omitempty"`
    
}

