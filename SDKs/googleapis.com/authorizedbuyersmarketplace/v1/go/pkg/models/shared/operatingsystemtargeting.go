package shared

type OperatingSystemTargeting struct {
	OperatingSystemCriteria        *CriteriaTargeting `json:"operatingSystemCriteria"`
	OperatingSystemVersionCriteria *CriteriaTargeting `json:"operatingSystemVersionCriteria"`
}
