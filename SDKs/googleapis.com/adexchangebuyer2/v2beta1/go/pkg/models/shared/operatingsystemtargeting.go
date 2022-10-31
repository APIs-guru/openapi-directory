package shared

type OperatingSystemTargeting struct {
	OperatingSystemCriteria        *CriteriaTargeting `json:"operatingSystemCriteria,omitempty"`
	OperatingSystemVersionCriteria *CriteriaTargeting `json:"operatingSystemVersionCriteria,omitempty"`
}
