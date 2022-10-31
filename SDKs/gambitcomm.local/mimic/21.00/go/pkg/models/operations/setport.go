package operations

type SetPortPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	Port     int32 `pathParam:"style=simple,explode=false,name=port"`
}

type SetPortRequest struct {
	PathParams SetPortPathParams
}

type SetPortResponse struct {
	ContentType                     string
	StatusCode                      int64
	SetPort200ApplicationJSONString *string
}
