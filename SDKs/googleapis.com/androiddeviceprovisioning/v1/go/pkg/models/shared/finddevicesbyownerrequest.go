package shared

type FindDevicesByOwnerRequestSectionTypeEnum string

const (
	FindDevicesByOwnerRequestSectionTypeEnumSectionTypeUnspecified FindDevicesByOwnerRequestSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	FindDevicesByOwnerRequestSectionTypeEnumSectionTypeSimLock     FindDevicesByOwnerRequestSectionTypeEnum = "SECTION_TYPE_SIM_LOCK"
	FindDevicesByOwnerRequestSectionTypeEnumSectionTypeZeroTouch   FindDevicesByOwnerRequestSectionTypeEnum = "SECTION_TYPE_ZERO_TOUCH"
)

type FindDevicesByOwnerRequest struct {
	CustomerID  []string                                  `json:"customerId"`
	Limit       *string                                   `json:"limit"`
	PageToken   *string                                   `json:"pageToken"`
	SectionType *FindDevicesByOwnerRequestSectionTypeEnum `json:"sectionType"`
}
