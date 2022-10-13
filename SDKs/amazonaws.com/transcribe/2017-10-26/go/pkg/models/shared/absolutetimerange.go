package shared

type AbsoluteTimeRange struct {
	EndTime   *int64 `json:"EndTime"`
	First     *int64 `json:"First"`
	Last      *int64 `json:"Last"`
	StartTime *int64 `json:"StartTime"`
}
