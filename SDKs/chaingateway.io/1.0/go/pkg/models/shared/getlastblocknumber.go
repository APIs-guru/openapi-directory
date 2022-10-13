package shared

type GetLastBlockNumber struct {
	Blocknumber int32 `json:"blocknumber"`
	Ok          bool  `json:"ok"`
}
