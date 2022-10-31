package operations



type ProtocolTftpGetStatisticsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolTftpGetStatisticsRequest struct {
    PathParams ProtocolTftpGetStatisticsPathParams 
    
}

type ProtocolTftpGetStatisticsResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolTftpGetStatistics200ApplicationJSONInt32Integers []int32 
    
}

