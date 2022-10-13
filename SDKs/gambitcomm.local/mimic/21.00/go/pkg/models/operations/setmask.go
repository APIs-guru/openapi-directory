package operations

type SetMaskPathParams struct {
	AgentNum int64  `pathParam:"style=simple,explode=false,name=agentNum"`
	Mask     string `pathParam:"style=simple,explode=false,name=mask"`
}

type SetMaskRequest struct {
	PathParams SetMaskPathParams
}

type SetMaskResponse struct {
	ContentType                     string
	StatusCode                      int64
	SetMask200ApplicationJSONString *string
}
