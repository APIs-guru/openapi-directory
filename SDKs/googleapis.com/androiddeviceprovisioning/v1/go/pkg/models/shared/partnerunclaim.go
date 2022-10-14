package shared

type PartnerUnclaimSectionTypeEnum string

const (
	PartnerUnclaimSectionTypeEnumSectionTypeUnspecified PartnerUnclaimSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	PartnerUnclaimSectionTypeEnumSectionTypeSimLock     PartnerUnclaimSectionTypeEnum = "SECTION_TYPE_SIM_LOCK"
	PartnerUnclaimSectionTypeEnumSectionTypeZeroTouch   PartnerUnclaimSectionTypeEnum = "SECTION_TYPE_ZERO_TOUCH"
)

type PartnerUnclaim struct {
	DeviceID               *string                        `json:"deviceId,omitempty"`
	DeviceIdentifier       *DeviceIdentifier              `json:"deviceIdentifier,omitempty"`
	SectionType            *PartnerUnclaimSectionTypeEnum `json:"sectionType,omitempty"`
	VacationModeDays       *int32                         `json:"vacationModeDays,omitempty"`
	VacationModeExpireTime *string                        `json:"vacationModeExpireTime,omitempty"`
}
