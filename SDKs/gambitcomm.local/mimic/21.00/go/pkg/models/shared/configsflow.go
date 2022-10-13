package shared

type ConfigSflow struct {
	Collector          *string `json:"collector"`
	Collectorport      *int32  `json:"collectorport"`
	EncodingType       *string `json:"encoding_type"`
	Filename           *string `json:"filename"`
	FlowsPerMin        *int32  `json:"flows_per_min"`
	IncludeSamples     *string `json:"include_samples"`
	RecordsPerSample   *string `json:"records_per_sample"`
	SamplesPerDatagram *string `json:"samples_per_datagram"`
}
