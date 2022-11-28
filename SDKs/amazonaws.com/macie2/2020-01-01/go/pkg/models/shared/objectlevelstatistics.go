package shared

// ObjectLevelStatistics
// Provides information about the total storage size (in bytes) or number of objects that Amazon Macie can't analyze in one or more S3 buckets. In a BucketMetadata or MatchingBucket object, this data is for a specific bucket. In a GetBucketStatisticsResponse object, this data is aggregated for all the buckets in the query results. If versioning is enabled for a bucket, total storage size values are based on the size of the latest version of each applicable object in the bucket.
type ObjectLevelStatistics struct {
	FileType     *int64 `json:"fileType,omitempty"`
	StorageClass *int64 `json:"storageClass,omitempty"`
	Total        *int64 `json:"total,omitempty"`
}
