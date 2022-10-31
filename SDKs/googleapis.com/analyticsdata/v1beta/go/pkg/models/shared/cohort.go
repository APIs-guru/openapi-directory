package shared



type Cohort struct {
    DateRange *DateRange `json:"dateRange,omitempty"`
    Dimension *string `json:"dimension,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

