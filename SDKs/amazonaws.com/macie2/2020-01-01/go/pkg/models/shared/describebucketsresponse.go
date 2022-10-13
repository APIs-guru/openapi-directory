package shared

type DescribeBucketsResponse struct {
	Buckets   []BucketMetadata `json:"buckets"`
	NextToken *string          `json:"nextToken"`
}
