package shared

type PartnerUnclaimSectionTypeEnum string

const (
	PartnerUnclaimSectionTypeEnumSectionTypeUnspecified PartnerUnclaimSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	PartnerUnclaimSectionTypeEnumSectionTypeSimLock     PartnerUnclaimSectionTypeEnum = "SECTION_TYPE_SIM_LOCK"
	PartnerUnclaimSectionTypeEnumSectionTypeZeroTouch   PartnerUnclaimSectionTypeEnum = "SECTION_TYPE_ZERO_TOUCH"
)

type PartnerUnclaim struct {
	DeviceID               *string                        `json:"deviceId"`
	DeviceIdentifier       *DeviceIdentifier              `json:"deviceIdentifier"`
	SectionType            *PartnerUnclaimSectionTypeEnum `json:"sectionType"`
	VacationModeDays       *int32                         `json:"vacationModeDays"`
	VacationModeExpireTime *string                        `json:"vacationModeExpireTime"`
}
