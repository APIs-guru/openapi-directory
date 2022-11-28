package shared

// TechnologyTargeting
// Represents targeting about various types of technology.
type TechnologyTargeting struct {
	DeviceCapabilityTargeting *CriteriaTargeting        `json:"deviceCapabilityTargeting,omitempty"`
	DeviceCategoryTargeting   *CriteriaTargeting        `json:"deviceCategoryTargeting,omitempty"`
	OperatingSystemTargeting  *OperatingSystemTargeting `json:"operatingSystemTargeting,omitempty"`
}
