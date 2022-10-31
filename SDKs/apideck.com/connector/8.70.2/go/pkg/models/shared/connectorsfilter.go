package shared



type ConnectorsFilter struct {
    Status *ConnectorStatusEnum `queryParam:"name=status"`
    UnifiedAPI *UnifiedAPIIDEnum `queryParam:"name=unified_api"`
    
}

