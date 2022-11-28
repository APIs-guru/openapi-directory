package shared

// MatchingResource
// Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes.
type MatchingResource struct {
	MatchingBucket *MatchingBucket `json:"matchingBucket,omitempty"`
}
