package operations



type ProtocolSyslogGetStatisticsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolSyslogGetStatisticsRequest struct {
    PathParams ProtocolSyslogGetStatisticsPathParams 
    
}

type ProtocolSyslogGetStatisticsResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSyslogGetStatistics200ApplicationJSONInt32Integers []int32 
    
}

