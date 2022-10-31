package shared

import (
"time")

type ListStreamConsumersInput struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StreamArn string `json:"StreamARN"`
    StreamCreationTimestamp *time.Time `json:"StreamCreationTimestamp,omitempty"`
    
}

