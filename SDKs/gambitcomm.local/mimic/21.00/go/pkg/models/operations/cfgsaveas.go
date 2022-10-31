package operations



type CfgSaveasPathParams struct {
    CfgFile string `pathParam:"style=simple,explode=false,name=cfgFile"`
    FirstAgentNum int32 `pathParam:"style=simple,explode=false,name=firstAgentNum"`
    LastAgentNum int32 `pathParam:"style=simple,explode=false,name=lastAgentNum"`
    
}

type CfgSaveasRequest struct {
    PathParams CfgSaveasPathParams 
    
}

type CfgSaveasResponse struct {
    ContentType string 
    StatusCode int64 
    CfgSaveas200ApplicationJSONObject map[string]int32 
    
}

