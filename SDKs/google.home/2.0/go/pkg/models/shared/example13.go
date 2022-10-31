package shared



type Example13 struct {
    CanEnroll bool `json:"can_enroll"`
    EnrollmentState int32 `json:"enrollment_state"`
    ErrorCode int32 `json:"error_code"`
    Ready bool `json:"ready"`
    Retryable bool `json:"retryable"`
    
}

