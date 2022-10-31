package operations



type ProtocolIpmiGetStatisticsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolIpmiGetStatisticsRequest struct {
    PathParams ProtocolIpmiGetStatisticsPathParams 
    
}

type ProtocolIpmiGetStatisticsResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolIpmiGetStatistics200ApplicationJSONInt32Integers []int32 
    
}

