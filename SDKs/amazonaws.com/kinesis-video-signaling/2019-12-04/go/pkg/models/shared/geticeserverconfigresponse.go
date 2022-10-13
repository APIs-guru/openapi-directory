package shared

type GetIceServerConfigResponse struct {
	IceServerList []IceServer `json:"IceServerList"`
}
