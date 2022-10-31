package operations



type ProtocolDhcpGetStatisticsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolDhcpGetStatisticsRequest struct {
    PathParams ProtocolDhcpGetStatisticsPathParams 
    
}

type ProtocolDhcpGetStatisticsResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolDhcpGetStatistics200ApplicationJSONInt32Integers []int32 
    
}

