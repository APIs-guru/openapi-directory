package shared



type TestsTests struct {
    Classname *string `json:"classname,omitempty"`
    File *string `json:"file,omitempty"`
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    Result *StatusEnum `json:"result,omitempty"`
    RunTime *float64 `json:"run_time,omitempty"`
    Source *string `json:"source,omitempty"`
    
}

type Tests struct {
    Tests []TestsTests `json:"tests,omitempty"`
    
}

