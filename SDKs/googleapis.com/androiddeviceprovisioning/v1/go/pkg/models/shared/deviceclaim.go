package shared

type DeviceClaimAdditionalServiceEnum string

const (
	DeviceClaimAdditionalServiceEnumAdditionalServiceUnspecified DeviceClaimAdditionalServiceEnum = "ADDITIONAL_SERVICE_UNSPECIFIED"
	DeviceClaimAdditionalServiceEnumDeviceProtection             DeviceClaimAdditionalServiceEnum = "DEVICE_PROTECTION"
)

type DeviceClaimSectionTypeEnum string

const (
	DeviceClaimSectionTypeEnumSectionTypeUnspecified DeviceClaimSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	DeviceClaimSectionTypeEnumSectionTypeSimLock     DeviceClaimSectionTypeEnum = "SECTION_TYPE_SIM_LOCK"
	DeviceClaimSectionTypeEnumSectionTypeZeroTouch   DeviceClaimSectionTypeEnum = "SECTION_TYPE_ZERO_TOUCH"
)

type DeviceClaim struct {
	AdditionalService      *DeviceClaimAdditionalServiceEnum `json:"additionalService"`
	OwnerCompanyID         *string                           `json:"ownerCompanyId"`
	ResellerID             *string                           `json:"resellerId"`
	SectionType            *DeviceClaimSectionTypeEnum       `json:"sectionType"`
	VacationModeExpireTime *string                           `json:"vacationModeExpireTime"`
	VacationModeStartTime  *string                           `json:"vacationModeStartTime"`
}
