package operations

type ProtocolSnmpv3ViewAddPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Mask     string `pathParam:"style=simple,explode=false,name=mask"`
	Subtree  string `pathParam:"style=simple,explode=false,name=subtree"`
	ViewName string `pathParam:"style=simple,explode=false,name=viewName"`
	ViewType string `pathParam:"style=simple,explode=false,name=viewType"`
}

type ProtocolSnmpv3ViewAddRequest struct {
	PathParams ProtocolSnmpv3ViewAddPathParams
}

type ProtocolSnmpv3ViewAddResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ProtocolSnmpv3ViewAdd200ApplicationJSONString *string
}
