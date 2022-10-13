package operations

type AgentStoreLreplacePathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Index    int32  `pathParam:"style=simple,explode=false,name=index"`
	Var      string `pathParam:"style=simple,explode=false,name=var"`
}

type AgentStoreLreplaceRequest struct {
	PathParams AgentStoreLreplacePathParams
	Request    *string `request:"mediaType=application/json"`
}

type AgentStoreLreplaceResponse struct {
	ContentType                                string
	StatusCode                                 int64
	AgentStoreLreplace200ApplicationJSONString *string
}
