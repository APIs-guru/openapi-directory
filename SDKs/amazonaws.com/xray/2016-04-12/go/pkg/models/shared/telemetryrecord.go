package shared

import (
	"time"
)

type TelemetryRecord struct {
	BackendConnectionErrors *BackendConnectionErrors `json:"BackendConnectionErrors"`
	SegmentsReceivedCount   *int64                   `json:"SegmentsReceivedCount"`
	SegmentsRejectedCount   *int64                   `json:"SegmentsRejectedCount"`
	SegmentsSentCount       *int64                   `json:"SegmentsSentCount"`
	SegmentsSpilloverCount  *int64                   `json:"SegmentsSpilloverCount"`
	Timestamp               time.Time                `json:"Timestamp"`
}
