package shared

type CohortSpec struct {
	CohortReportSettings *CohortReportSettings `json:"cohortReportSettings,omitempty"`
	Cohorts              []Cohort              `json:"cohorts,omitempty"`
	CohortsRange         *CohortsRange         `json:"cohortsRange,omitempty"`
}
