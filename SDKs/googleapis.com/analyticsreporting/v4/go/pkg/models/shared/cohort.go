package shared

type CohortTypeEnum string

const (
	CohortTypeEnumUnspecifiedCohortType CohortTypeEnum = "UNSPECIFIED_COHORT_TYPE"
	CohortTypeEnumFirstVisitDate        CohortTypeEnum = "FIRST_VISIT_DATE"
)

type Cohort struct {
	DateRange *DateRange      `json:"dateRange"`
	Name      *string         `json:"name"`
	Type      *CohortTypeEnum `json:"type"`
}
