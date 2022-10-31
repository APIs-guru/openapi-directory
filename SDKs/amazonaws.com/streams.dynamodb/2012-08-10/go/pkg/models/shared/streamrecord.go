package shared

import (
"time")

type StreamRecord struct {
    ApproximateCreationDateTime *time.Time `json:"ApproximateCreationDateTime,omitempty"`
    Keys map[string]AttributeValue `json:"Keys,omitempty"`
    NewImage map[string]AttributeValue `json:"NewImage,omitempty"`
    OldImage map[string]AttributeValue `json:"OldImage,omitempty"`
    SequenceNumber *string `json:"SequenceNumber,omitempty"`
    SizeBytes *int64 `json:"SizeBytes,omitempty"`
    StreamViewType *StreamViewTypeEnum `json:"StreamViewType,omitempty"`
    
}

