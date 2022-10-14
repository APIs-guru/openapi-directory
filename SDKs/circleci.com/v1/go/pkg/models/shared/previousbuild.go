package shared

type PreviousBuild struct {
	BuildNum        *int64      `json:"build_num,omitempty"`
	BuildTimeMillis *int64      `json:"build_time_millis,omitempty"`
	Status          *StatusEnum `json:"status,omitempty"`
}
