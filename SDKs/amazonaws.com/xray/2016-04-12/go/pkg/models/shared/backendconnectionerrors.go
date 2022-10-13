package shared

type BackendConnectionErrors struct {
	ConnectionRefusedCount *int64 `json:"ConnectionRefusedCount"`
	HTTPCode4XxCount       *int64 `json:"HTTPCode4XXCount"`
	HTTPCode5XxCount       *int64 `json:"HTTPCode5XXCount"`
	OtherCount             *int64 `json:"OtherCount"`
	TimeoutCount           *int64 `json:"TimeoutCount"`
	UnknownHostCount       *int64 `json:"UnknownHostCount"`
}
