package shared



type ConfigNetflow struct {
    Bundleflowsets *int32 `json:"bundleflowsets,omitempty"`
    Collector *string `json:"collector,omitempty"`
    Collectorport *int32 `json:"collectorport,omitempty"`
    Filename *string `json:"filename,omitempty"`
    
}

