package shared



type ExportJobResource struct {
    RoleArn string `json:"RoleArn"`
    S3URLPrefix string `json:"S3UrlPrefix"`
    SegmentID *string `json:"SegmentId,omitempty"`
    SegmentVersion *int64 `json:"SegmentVersion,omitempty"`
    
}

