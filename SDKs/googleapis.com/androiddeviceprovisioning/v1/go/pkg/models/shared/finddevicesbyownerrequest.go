package shared

type FindDevicesByOwnerRequestSectionTypeEnum string

const (
	FindDevicesByOwnerRequestSectionTypeEnumSectionTypeUnspecified FindDevicesByOwnerRequestSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	FindDevicesByOwnerRequestSectionTypeEnumSectionTypeSimLock     FindDevicesByOwnerRequestSectionTypeEnum = "SECTION_TYPE_SIM_LOCK"
	FindDevicesByOwnerRequestSectionTypeEnumSectionTypeZeroTouch   FindDevicesByOwnerRequestSectionTypeEnum = "SECTION_TYPE_ZERO_TOUCH"
)

// FindDevicesByOwnerRequest
// Request to find devices by customers.
type FindDevicesByOwnerRequest struct {
	CustomerID                []string                                  `json:"customerId,omitempty"`
	GoogleWorkspaceCustomerID []string                                  `json:"googleWorkspaceCustomerId,omitempty"`
	Limit                     *string                                   `json:"limit,omitempty"`
	PageToken                 *string                                   `json:"pageToken,omitempty"`
	SectionType               *FindDevicesByOwnerRequestSectionTypeEnum `json:"sectionType,omitempty"`
}
