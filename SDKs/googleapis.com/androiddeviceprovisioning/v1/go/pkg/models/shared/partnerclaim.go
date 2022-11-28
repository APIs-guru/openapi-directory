package shared

type PartnerClaimSectionTypeEnum string

const (
	PartnerClaimSectionTypeEnumSectionTypeUnspecified PartnerClaimSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	PartnerClaimSectionTypeEnumSectionTypeSimLock     PartnerClaimSectionTypeEnum = "SECTION_TYPE_SIM_LOCK"
	PartnerClaimSectionTypeEnumSectionTypeZeroTouch   PartnerClaimSectionTypeEnum = "SECTION_TYPE_ZERO_TOUCH"
)

// PartnerClaim
// Identifies one claim request.
type PartnerClaim struct {
	CustomerID                *string                      `json:"customerId,omitempty"`
	DeviceIdentifier          *DeviceIdentifier            `json:"deviceIdentifier,omitempty"`
	DeviceMetadata            *DeviceMetadata              `json:"deviceMetadata,omitempty"`
	GoogleWorkspaceCustomerID *string                      `json:"googleWorkspaceCustomerId,omitempty"`
	PreProvisioningToken      *string                      `json:"preProvisioningToken,omitempty"`
	SectionType               *PartnerClaimSectionTypeEnum `json:"sectionType,omitempty"`
}
