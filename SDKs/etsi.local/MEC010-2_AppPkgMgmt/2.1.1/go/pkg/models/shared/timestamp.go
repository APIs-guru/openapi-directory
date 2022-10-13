package shared

type TimeStamp struct {
	NanoSeconds int64 `json:"nanoSeconds"`
	Seconds     int64 `json:"seconds"`
}
