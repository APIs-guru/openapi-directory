package shared

type EdgeModelStat struct {
	ActiveDeviceCount    int64  `json:"ActiveDeviceCount"`
	ConnectedDeviceCount int64  `json:"ConnectedDeviceCount"`
	ModelName            string `json:"ModelName"`
	ModelVersion         string `json:"ModelVersion"`
	OfflineDeviceCount   int64  `json:"OfflineDeviceCount"`
	SamplingDeviceCount  int64  `json:"SamplingDeviceCount"`
}
