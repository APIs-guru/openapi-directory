package operations



type ProtocolSnmpv3UserAddPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    AuthKey string `pathParam:"style=simple,explode=false,name=authKey"`
    AuthProtocol string `pathParam:"style=simple,explode=false,name=authProtocol"`
    PrivKey string `pathParam:"style=simple,explode=false,name=privKey"`
    PrivProtocol string `pathParam:"style=simple,explode=false,name=privProtocol"`
    SecurityName string `pathParam:"style=simple,explode=false,name=securityName"`
    UserName string `pathParam:"style=simple,explode=false,name=userName"`
    
}

type ProtocolSnmpv3UserAddRequest struct {
    PathParams ProtocolSnmpv3UserAddPathParams 
    
}

type ProtocolSnmpv3UserAddResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmpv3UserAdd200ApplicationJSONString *string 
    
}

