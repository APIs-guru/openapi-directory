package shared

import (
"time")

type OperationSummary struct {
    OperationID string `json:"OperationId"`
    Status OperationStatusEnum `json:"Status"`
    SubmittedDate time.Time `json:"SubmittedDate"`
    Type OperationTypeEnum `json:"Type"`
    
}

