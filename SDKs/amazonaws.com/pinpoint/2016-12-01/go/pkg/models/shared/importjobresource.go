package shared

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
