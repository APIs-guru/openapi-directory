package shared

type ClaimDeviceRequestSectionTypeEnum string

const (
	ClaimDeviceRequestSectionTypeEnumSectionTypeUnspecified ClaimDeviceRequestSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	ClaimDeviceRequestSectionTypeEnumSectionTypeSimLock     ClaimDeviceRequestSectionTypeEnum = "SECTION_TYPE_SIM_LOCK"
	ClaimDeviceRequestSectionTypeEnumSectionTypeZeroTouch   ClaimDeviceRequestSectionTypeEnum = "SECTION_TYPE_ZERO_TOUCH"
)

// ClaimDeviceRequest
// Request message to claim a device on behalf of a customer.
type ClaimDeviceRequest struct {
	CustomerID                *string                            `json:"customerId,omitempty"`
	DeviceIdentifier          *DeviceIdentifier                  `json:"deviceIdentifier,omitempty"`
	DeviceMetadata            *DeviceMetadata                    `json:"deviceMetadata,omitempty"`
	GoogleWorkspaceCustomerID *string                            `json:"googleWorkspaceCustomerId,omitempty"`
	PreProvisioningToken      *string                            `json:"preProvisioningToken,omitempty"`
	SectionType               *ClaimDeviceRequestSectionTypeEnum `json:"sectionType,omitempty"`
	SimlockProfileID          *string                            `json:"simlockProfileId,omitempty"`
}
