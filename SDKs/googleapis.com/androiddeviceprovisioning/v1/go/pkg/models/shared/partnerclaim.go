package shared

type PartnerClaimSectionTypeEnum string

const (
	PartnerClaimSectionTypeEnumSectionTypeUnspecified PartnerClaimSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	PartnerClaimSectionTypeEnumSectionTypeSimLock     PartnerClaimSectionTypeEnum = "SECTION_TYPE_SIM_LOCK"
	PartnerClaimSectionTypeEnumSectionTypeZeroTouch   PartnerClaimSectionTypeEnum = "SECTION_TYPE_ZERO_TOUCH"
)

type PartnerClaim struct {
	CustomerID       *string                      `json:"customerId"`
	DeviceIdentifier *DeviceIdentifier            `json:"deviceIdentifier"`
	DeviceMetadata   *DeviceMetadata              `json:"deviceMetadata"`
	SectionType      *PartnerClaimSectionTypeEnum `json:"sectionType"`
}
