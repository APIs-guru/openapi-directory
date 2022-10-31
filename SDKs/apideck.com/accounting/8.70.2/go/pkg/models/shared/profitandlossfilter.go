package shared



type ProfitAndLossFilter struct {
    CustomerID *string `queryParam:"name=customer_id"`
    EndDate *string `queryParam:"name=end_date"`
    StartDate *string `queryParam:"name=start_date"`
    
}

