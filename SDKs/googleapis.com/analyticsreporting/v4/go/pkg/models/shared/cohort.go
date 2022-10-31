package shared




type CohortTypeEnum string

const (
    CohortTypeEnumUnspecifiedCohortType CohortTypeEnum = "UNSPECIFIED_COHORT_TYPE"
CohortTypeEnumFirstVisitDate CohortTypeEnum = "FIRST_VISIT_DATE"
)


type Cohort struct {
    DateRange *DateRange `json:"dateRange,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *CohortTypeEnum `json:"type,omitempty"`
    
}

