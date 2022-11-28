package shared

// ImportJobResource
// Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
type ImportJobResource struct {
	DefineSegment     *bool      `json:"DefineSegment,omitempty"`
	ExternalID        *string    `json:"ExternalId,omitempty"`
	Format            FormatEnum `json:"Format"`
	RegisterEndpoints *bool      `json:"RegisterEndpoints,omitempty"`
	RoleArn           string     `json:"RoleArn"`
	S3URL             string     `json:"S3Url"`
	SegmentID         *string    `json:"SegmentId,omitempty"`
	SegmentName       *string    `json:"SegmentName,omitempty"`
}
