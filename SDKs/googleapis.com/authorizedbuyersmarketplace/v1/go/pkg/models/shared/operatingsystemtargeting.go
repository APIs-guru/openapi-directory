package shared

// OperatingSystemTargeting
// Represents targeting information for operating systems.
type OperatingSystemTargeting struct {
	OperatingSystemCriteria        *CriteriaTargeting `json:"operatingSystemCriteria,omitempty"`
	OperatingSystemVersionCriteria *CriteriaTargeting `json:"operatingSystemVersionCriteria,omitempty"`
}
