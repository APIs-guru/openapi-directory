package operations



type ProtocolWebGetStatisticsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolWebGetStatisticsRequest struct {
    PathParams ProtocolWebGetStatisticsPathParams 
    
}

type ProtocolWebGetStatisticsResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolWebGetStatistics200ApplicationJSONInt32Integers []int32 
    
}

