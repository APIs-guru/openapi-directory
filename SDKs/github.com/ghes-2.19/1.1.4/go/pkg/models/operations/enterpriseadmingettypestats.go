package operations



type EnterpriseAdminGetTypeStatsPathParams struct {
    Type string `pathParam:"style=simple,explode=false,name=type"`
    
}

type EnterpriseAdminGetTypeStatsRequest struct {
    PathParams EnterpriseAdminGetTypeStatsPathParams 
    
}

type EnterpriseAdminGetTypeStatsResponse struct {
    ContentType string 
    StatusCode int64 
    EnterpriseAdminGetTypeStats200ApplicationJSONAnyOf *interface{} 
    
}

