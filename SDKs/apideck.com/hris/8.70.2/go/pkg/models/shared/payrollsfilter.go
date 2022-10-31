package shared



type PayrollsFilter struct {
    EndDate *string `queryParam:"name=end_date"`
    StartDate *string `queryParam:"name=start_date"`
    
}

