package operations

type GetVideoChannelPathParams struct {
	ChannelHandle string `pathParam:"style=simple,explode=false,name=channelHandle"`
}

type GetVideoChannelRequest struct {
	PathParams GetVideoChannelPathParams
}

type GetVideoChannelResponse struct {
	ContentType  string
	StatusCode   int64
	VideoChannel *interface{}
}
