package shared

import (
"time")

type TelemetryRecord struct {
    BackendConnectionErrors *BackendConnectionErrors `json:"BackendConnectionErrors,omitempty"`
    SegmentsReceivedCount *int64 `json:"SegmentsReceivedCount,omitempty"`
    SegmentsRejectedCount *int64 `json:"SegmentsRejectedCount,omitempty"`
    SegmentsSentCount *int64 `json:"SegmentsSentCount,omitempty"`
    SegmentsSpilloverCount *int64 `json:"SegmentsSpilloverCount,omitempty"`
    Timestamp time.Time `json:"Timestamp"`
    
}

