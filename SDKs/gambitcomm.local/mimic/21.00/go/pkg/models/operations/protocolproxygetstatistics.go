package operations



type ProtocolProxyGetStatisticsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolProxyGetStatisticsRequest struct {
    PathParams ProtocolProxyGetStatisticsPathParams 
    
}

type ProtocolProxyGetStatisticsResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolProxyGetStatistics200ApplicationJSONInt32Integers []int32 
    
}

