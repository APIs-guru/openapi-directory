package shared

type Content struct {
	Address string `json:"address"`
	Crypto  Crypto `json:"crypto"`
	ID      string `json:"id"`
	Version int32  `json:"version"`
}
