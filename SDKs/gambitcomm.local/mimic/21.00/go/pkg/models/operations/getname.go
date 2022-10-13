package operations

type GetNamePathParams struct {
	Oid      string `pathParam:"style=simple,explode=false,name=OID"`
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetNameRequest struct {
	PathParams GetNamePathParams
}

type GetNameResponse struct {
	ContentType                     string
	StatusCode                      int64
	GetName200ApplicationJSONString *string
}
