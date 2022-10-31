package operations



type MonthlyActiveUsersForLast30DaysQueryParams struct {
    AppID *string `queryParam:"style=form,explode=true,name=app_id"`
    EndingAt *string `queryParam:"style=form,explode=true,name=ending_at"`
    Length *string `queryParam:"style=form,explode=true,name=length"`
    
}

type MonthlyActiveUsersForLast30DaysRequest struct {
    QueryParams MonthlyActiveUsersForLast30DaysQueryParams 
    
}

type MonthlyActiveUsersForLast30DaysResponse struct {
    ContentType string 
    StatusCode int64 
    
}

