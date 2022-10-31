package shared



type ExecutionError struct {
    Message string `json:"Message"`
    Type ExecutionErrorTypeEnum `json:"Type"`
    
}

