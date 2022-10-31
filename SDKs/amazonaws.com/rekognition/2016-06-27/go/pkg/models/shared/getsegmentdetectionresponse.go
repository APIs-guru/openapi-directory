package shared

type GetSegmentDetectionResponse struct {
	AudioMetadata        []AudioMetadata     `json:"AudioMetadata,omitempty"`
	JobStatus            *VideoJobStatusEnum `json:"JobStatus,omitempty"`
	NextToken            *string             `json:"NextToken,omitempty"`
	Segments             []SegmentDetection  `json:"Segments,omitempty"`
	SelectedSegmentTypes []SegmentTypeInfo   `json:"SelectedSegmentTypes,omitempty"`
	StatusMessage        *string             `json:"StatusMessage,omitempty"`
	VideoMetadata        []VideoMetadata     `json:"VideoMetadata,omitempty"`
}
