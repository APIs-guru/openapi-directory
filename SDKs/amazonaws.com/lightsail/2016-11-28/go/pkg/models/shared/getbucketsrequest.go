package shared

type GetBucketsRequest struct {
	BucketName                *string `json:"bucketName"`
	IncludeConnectedResources *bool   `json:"includeConnectedResources"`
	PageToken                 *string `json:"pageToken"`
}
