package shared

type ImportJobResource struct {
	DefineSegment     *bool      `json:"DefineSegment"`
	ExternalID        *string    `json:"ExternalId"`
	Format            FormatEnum `json:"Format"`
	RegisterEndpoints *bool      `json:"RegisterEndpoints"`
	RoleArn           string     `json:"RoleArn"`
	S3URL             string     `json:"S3Url"`
	SegmentID         *string    `json:"SegmentId"`
	SegmentName       *string    `json:"SegmentName"`
}
