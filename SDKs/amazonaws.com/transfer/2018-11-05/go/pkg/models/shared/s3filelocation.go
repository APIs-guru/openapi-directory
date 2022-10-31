package shared



type S3FileLocation struct {
    Bucket *string `json:"Bucket,omitempty"`
    Etag *string `json:"Etag,omitempty"`
    Key *string `json:"Key,omitempty"`
    VersionID *string `json:"VersionId,omitempty"`
    
}

