package shared

type GetBucketsRequest struct {
	BucketName                *string `json:"bucketName,omitempty"`
	IncludeConnectedResources *bool   `json:"includeConnectedResources,omitempty"`
	PageToken                 *string `json:"pageToken,omitempty"`
}
