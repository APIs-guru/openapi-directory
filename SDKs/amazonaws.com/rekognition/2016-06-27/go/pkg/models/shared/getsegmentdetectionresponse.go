package shared

type GetSegmentDetectionResponse struct {
	AudioMetadata        []AudioMetadata     `json:"AudioMetadata"`
	JobStatus            *VideoJobStatusEnum `json:"JobStatus"`
	NextToken            *string             `json:"NextToken"`
	Segments             []SegmentDetection  `json:"Segments"`
	SelectedSegmentTypes []SegmentTypeInfo   `json:"SelectedSegmentTypes"`
	StatusMessage        *string             `json:"StatusMessage"`
	VideoMetadata        []VideoMetadata     `json:"VideoMetadata"`
}
