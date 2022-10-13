package operations

type MunsetValuePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type MunsetValueRequest struct {
	PathParams MunsetValuePathParams
	Request    [][]string `request:"mediaType=application/json"`
}

type MunsetValueResponse struct {
	ContentType                         string
	StatusCode                          int64
	MunsetValue200ApplicationJSONString *string
}
