package shared

// SegmentImportResource
// Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.
type SegmentImportResource struct {
	ChannelCounts map[string]int64 `json:"ChannelCounts,omitempty"`
	ExternalID    string           `json:"ExternalId"`
	Format        FormatEnum       `json:"Format"`
	RoleArn       string           `json:"RoleArn"`
	S3URL         string           `json:"S3Url"`
	Size          int64            `json:"Size"`
}
