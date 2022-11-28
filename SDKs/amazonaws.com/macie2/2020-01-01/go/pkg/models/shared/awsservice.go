package shared

// AwsService
// Provides information about an Amazon Web Service that performed an action on an affected resource.
type AwsService struct {
	InvokedBy *string `json:"invokedBy,omitempty"`
}
