package shared

type SegmentDetection struct {
	DurationFrames       *int64               `json:"DurationFrames"`
	DurationMillis       *int64               `json:"DurationMillis"`
	DurationSmpte        *string              `json:"DurationSMPTE"`
	EndFrameNumber       *int64               `json:"EndFrameNumber"`
	EndTimecodeSmpte     *string              `json:"EndTimecodeSMPTE"`
	EndTimestampMillis   *int64               `json:"EndTimestampMillis"`
	ShotSegment          *ShotSegment         `json:"ShotSegment"`
	StartFrameNumber     *int64               `json:"StartFrameNumber"`
	StartTimecodeSmpte   *string              `json:"StartTimecodeSMPTE"`
	StartTimestampMillis *int64               `json:"StartTimestampMillis"`
	TechnicalCueSegment  *TechnicalCueSegment `json:"TechnicalCueSegment"`
	Type                 *SegmentTypeEnum     `json:"Type"`
}
