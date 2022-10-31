package operations



type CfgLoadPathParams struct {
    CfgFile string `pathParam:"style=simple,explode=false,name=cfgFile"`
    FirstAgentNum int32 `pathParam:"style=simple,explode=false,name=firstAgentNum"`
    LastAgentNum int32 `pathParam:"style=simple,explode=false,name=lastAgentNum"`
    StartAgentNum int32 `pathParam:"style=simple,explode=false,name=startAgentNum"`
    
}

type CfgLoadRequest struct {
    PathParams CfgLoadPathParams 
    
}

type CfgLoadResponse struct {
    ContentType string 
    StatusCode int64 
    CfgLoad200ApplicationJSONObject map[string]int32 
    
}

