package shared

type CohortGroup struct {
	Cohorts       []Cohort `json:"cohorts"`
	LifetimeValue *bool    `json:"lifetimeValue"`
}
