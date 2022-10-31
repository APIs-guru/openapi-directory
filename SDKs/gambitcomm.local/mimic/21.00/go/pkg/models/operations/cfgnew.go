package operations

type CfgNewPathParams struct {
	FirstAgentNum int32 `pathParam:"style=simple,explode=false,name=firstAgentNum"`
	LastAgentNum  int32 `pathParam:"style=simple,explode=false,name=lastAgentNum"`
}

type CfgNewRequest struct {
	PathParams CfgNewPathParams
}

type CfgNewResponse struct {
	ContentType                    string
	StatusCode                     int64
	CfgNew200ApplicationJSONObject map[string]int32
}
