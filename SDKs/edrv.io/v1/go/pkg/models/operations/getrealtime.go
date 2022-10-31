package operations

type GetRealtimeHeaders struct {
	SecWebsocketProtocol string `header:"style=simple,explode=false,name=sec-websocket-protocol"`
}

type GetRealtimeRequest struct {
	Headers GetRealtimeHeaders
}

type GetRealtimeResponse struct {
	ContentType string
	StatusCode  int64
}
