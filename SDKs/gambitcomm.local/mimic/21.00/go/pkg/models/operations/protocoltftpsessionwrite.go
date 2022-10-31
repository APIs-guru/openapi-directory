package operations



type ProtocolTftpSessionWritePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Srcfile string `pathParam:"style=simple,explode=false,name=srcfile"`
    
}

type ProtocolTftpSessionWriteRequest struct {
    PathParams ProtocolTftpSessionWritePathParams 
    
}

type ProtocolTftpSessionWriteResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolTftpSessionWrite200ApplicationJSONInt32Integers []int32 
    
}

