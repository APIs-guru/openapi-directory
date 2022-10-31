package shared




type DeviceClaimAdditionalServiceEnum string

const (
    DeviceClaimAdditionalServiceEnumAdditionalServiceUnspecified DeviceClaimAdditionalServiceEnum = "ADDITIONAL_SERVICE_UNSPECIFIED"
DeviceClaimAdditionalServiceEnumDeviceProtection DeviceClaimAdditionalServiceEnum = "DEVICE_PROTECTION"
)



type DeviceClaimSectionTypeEnum string

const (
    DeviceClaimSectionTypeEnumSectionTypeUnspecified DeviceClaimSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
DeviceClaimSectionTypeEnumSectionTypeSimLock DeviceClaimSectionTypeEnum = "SECTION_TYPE_SIM_LOCK"
DeviceClaimSectionTypeEnumSectionTypeZeroTouch DeviceClaimSectionTypeEnum = "SECTION_TYPE_ZERO_TOUCH"
)


type DeviceClaim struct {
    AdditionalService *DeviceClaimAdditionalServiceEnum `json:"additionalService,omitempty"`
    OwnerCompanyID *string `json:"ownerCompanyId,omitempty"`
    ResellerID *string `json:"resellerId,omitempty"`
    SectionType *DeviceClaimSectionTypeEnum `json:"sectionType,omitempty"`
    VacationModeExpireTime *string `json:"vacationModeExpireTime,omitempty"`
    VacationModeStartTime *string `json:"vacationModeStartTime,omitempty"`
    
}

