package shared



type TechnologyTargeting struct {
    DeviceCapabilityTargeting *CriteriaTargeting `json:"deviceCapabilityTargeting,omitempty"`
    DeviceCategoryTargeting *CriteriaTargeting `json:"deviceCategoryTargeting,omitempty"`
    OperatingSystemTargeting *OperatingSystemTargeting `json:"operatingSystemTargeting,omitempty"`
    
}

