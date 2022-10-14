package shared

type SegmentDetection struct {
	DurationFrames       *int64               `json:"DurationFrames,omitempty"`
	DurationMillis       *int64               `json:"DurationMillis,omitempty"`
	DurationSmpte        *string              `json:"DurationSMPTE,omitempty"`
	EndFrameNumber       *int64               `json:"EndFrameNumber,omitempty"`
	EndTimecodeSmpte     *string              `json:"EndTimecodeSMPTE,omitempty"`
	EndTimestampMillis   *int64               `json:"EndTimestampMillis,omitempty"`
	ShotSegment          *ShotSegment         `json:"ShotSegment,omitempty"`
	StartFrameNumber     *int64               `json:"StartFrameNumber,omitempty"`
	StartTimecodeSmpte   *string              `json:"StartTimecodeSMPTE,omitempty"`
	StartTimestampMillis *int64               `json:"StartTimestampMillis,omitempty"`
	TechnicalCueSegment  *TechnicalCueSegment `json:"TechnicalCueSegment,omitempty"`
	Type                 *SegmentTypeEnum     `json:"Type,omitempty"`
}
