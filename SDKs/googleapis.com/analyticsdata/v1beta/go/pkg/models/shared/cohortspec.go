package shared

type CohortSpec struct {
	CohortReportSettings *CohortReportSettings `json:"cohortReportSettings"`
	Cohorts              []Cohort              `json:"cohorts"`
	CohortsRange         *CohortsRange         `json:"cohortsRange"`
}
