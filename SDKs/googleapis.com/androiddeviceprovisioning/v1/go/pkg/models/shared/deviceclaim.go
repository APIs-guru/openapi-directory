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

// DeviceClaim
// A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).
type DeviceClaim struct {
	AdditionalService         *DeviceClaimAdditionalServiceEnum `json:"additionalService,omitempty"`
	GoogleWorkspaceCustomerID *string                           `json:"googleWorkspaceCustomerId,omitempty"`
	OwnerCompanyID            *string                           `json:"ownerCompanyId,omitempty"`
	ResellerID                *string                           `json:"resellerId,omitempty"`
	SectionType               *DeviceClaimSectionTypeEnum       `json:"sectionType,omitempty"`
	VacationModeExpireTime    *string                           `json:"vacationModeExpireTime,omitempty"`
	VacationModeStartTime     *string                           `json:"vacationModeStartTime,omitempty"`
}
