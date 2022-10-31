package operations



type ProtocolTodGettimePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    NumRetries int32 `pathParam:"style=simple,explode=false,name=numRetries"`
    PortNum int32 `pathParam:"style=simple,explode=false,name=portNum"`
    ScriptName string `pathParam:"style=simple,explode=false,name=scriptName"`
    ServerAddr string `pathParam:"style=simple,explode=false,name=serverAddr"`
    TimeSec int32 `pathParam:"style=simple,explode=false,name=timeSec"`
    
}

type ProtocolTodGettimeRequest struct {
    PathParams ProtocolTodGettimePathParams 
    
}

type ProtocolTodGettimeResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolTodGettime200ApplicationJSONStrings []string 
    
}

