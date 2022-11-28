package shared

// CohortGroup
// Defines a cohort group. For example: "cohortGroup": { "cohorts": [{ "name": "cohort 1", "type": "FIRST_VISIT_DATE", "dateRange": { "startDate": "2015-08-01", "endDate": "2015-08-01" } },{ "name": "cohort 2" "type": "FIRST_VISIT_DATE" "dateRange": { "startDate": "2015-07-01", "endDate": "2015-07-01" } }] }
type CohortGroup struct {
	Cohorts       []Cohort `json:"cohorts,omitempty"`
	LifetimeValue *bool    `json:"lifetimeValue,omitempty"`
}
