package shared

// SegmentDetection
// A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>.
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
