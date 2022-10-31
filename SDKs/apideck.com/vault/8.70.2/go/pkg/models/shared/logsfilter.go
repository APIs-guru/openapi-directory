package shared



type LogsFilter struct {
    ConnectorID *string `queryParam:"name=connector_id"`
    ExcludeUnifiedApis *string `queryParam:"name=exclude_unified_apis"`
    StatusCode *float64 `queryParam:"name=status_code"`
    
}

