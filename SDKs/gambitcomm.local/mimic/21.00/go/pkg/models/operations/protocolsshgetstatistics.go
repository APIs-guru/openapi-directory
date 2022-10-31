package operations



type ProtocolSSHGetStatisticsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolSSHGetStatisticsRequest struct {
    PathParams ProtocolSSHGetStatisticsPathParams 
    
}

type ProtocolSSHGetStatisticsResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSSHGetStatistics200ApplicationJSONInt32Integers []int32 
    
}

