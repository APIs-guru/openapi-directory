package shared

type PreviousBuild struct {
	BuildNum        *int64      `json:"build_num"`
	BuildTimeMillis *int64      `json:"build_time_millis"`
	Status          *StatusEnum `json:"status"`
}
