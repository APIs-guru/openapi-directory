package shared

// BackendConnectionErrors
// <p/>
type BackendConnectionErrors struct {
	ConnectionRefusedCount *int64 `json:"ConnectionRefusedCount,omitempty"`
	HTTPCode4XxCount       *int64 `json:"HTTPCode4XXCount,omitempty"`
	HTTPCode5XxCount       *int64 `json:"HTTPCode5XXCount,omitempty"`
	OtherCount             *int64 `json:"OtherCount,omitempty"`
	TimeoutCount           *int64 `json:"TimeoutCount,omitempty"`
	UnknownHostCount       *int64 `json:"UnknownHostCount,omitempty"`
}
