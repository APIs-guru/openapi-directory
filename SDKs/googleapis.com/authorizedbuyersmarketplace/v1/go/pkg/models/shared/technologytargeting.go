package shared

type TechnologyTargeting struct {
	DeviceCapabilityTargeting *CriteriaTargeting        `json:"deviceCapabilityTargeting"`
	DeviceCategoryTargeting   *CriteriaTargeting        `json:"deviceCategoryTargeting"`
	OperatingSystemTargeting  *OperatingSystemTargeting `json:"operatingSystemTargeting"`
}
