package shared



type SegmentImportResource struct {
    ChannelCounts map[string]int64 `json:"ChannelCounts,omitempty"`
    ExternalID string `json:"ExternalId"`
    Format FormatEnum `json:"Format"`
    RoleArn string `json:"RoleArn"`
    S3URL string `json:"S3Url"`
    Size int64 `json:"Size"`
    
}

