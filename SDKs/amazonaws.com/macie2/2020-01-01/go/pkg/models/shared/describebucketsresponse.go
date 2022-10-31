package shared



type DescribeBucketsResponse struct {
    Buckets []BucketMetadata `json:"buckets,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

