package shared

type IoUsage struct {
	ReadIOs  *int64 `json:"ReadIOs"`
	WriteIOs *int64 `json:"WriteIOs"`
}
