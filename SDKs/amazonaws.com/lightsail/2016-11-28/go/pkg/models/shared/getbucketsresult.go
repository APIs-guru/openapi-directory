package shared

type GetBucketsResult struct {
	Buckets       []Bucket `json:"buckets"`
	NextPageToken *string  `json:"nextPageToken"`
}
