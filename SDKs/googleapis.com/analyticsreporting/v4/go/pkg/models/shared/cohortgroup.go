package shared



type CohortGroup struct {
    Cohorts []Cohort `json:"cohorts,omitempty"`
    LifetimeValue *bool `json:"lifetimeValue,omitempty"`
    
}

