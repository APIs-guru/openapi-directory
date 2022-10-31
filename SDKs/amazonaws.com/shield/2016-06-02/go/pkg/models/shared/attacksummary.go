package shared

import (
"time")

type AttackSummary struct {
    AttackID *string `json:"AttackId,omitempty"`
    AttackVectors []AttackVectorDescription `json:"AttackVectors,omitempty"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    ResourceArn *string `json:"ResourceArn,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    
}

