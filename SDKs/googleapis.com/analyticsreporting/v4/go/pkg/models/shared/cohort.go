package shared

type CohortTypeEnum string

const (
	CohortTypeEnumUnspecifiedCohortType CohortTypeEnum = "UNSPECIFIED_COHORT_TYPE"
	CohortTypeEnumFirstVisitDate        CohortTypeEnum = "FIRST_VISIT_DATE"
)

// Cohort
// Defines a cohort. A cohort is a group of users who share a common characteristic. For example, all users with the same acquisition date belong to the same cohort.
type Cohort struct {
	DateRange *DateRange      `json:"dateRange,omitempty"`
	Name      *string         `json:"name,omitempty"`
	Type      *CohortTypeEnum `json:"type,omitempty"`
}
