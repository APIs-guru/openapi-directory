package shared



type ConfigSflow struct {
    Collector *string `json:"collector,omitempty"`
    Collectorport *int32 `json:"collectorport,omitempty"`
    EncodingType *string `json:"encoding_type,omitempty"`
    Filename *string `json:"filename,omitempty"`
    FlowsPerMin *int32 `json:"flows_per_min,omitempty"`
    IncludeSamples *string `json:"include_samples,omitempty"`
    RecordsPerSample *string `json:"records_per_sample,omitempty"`
    SamplesPerDatagram *string `json:"samples_per_datagram,omitempty"`
    
}

