package shared

// GoogleCloudApigeeV1DeveloperSubscriptionInput
// Structure of a DeveloperSubscription.
type GoogleCloudApigeeV1DeveloperSubscriptionInput struct {
	Apiproduct *string `json:"apiproduct,omitempty"`
	EndTime    *string `json:"endTime,omitempty"`
	StartTime  *string `json:"startTime,omitempty"`
}

// GoogleCloudApigeeV1DeveloperSubscription
// Structure of a DeveloperSubscription.
type GoogleCloudApigeeV1DeveloperSubscription struct {
	Apiproduct     *string `json:"apiproduct,omitempty"`
	CreatedAt      *string `json:"createdAt,omitempty"`
	EndTime        *string `json:"endTime,omitempty"`
	LastModifiedAt *string `json:"lastModifiedAt,omitempty"`
	Name           *string `json:"name,omitempty"`
	StartTime      *string `json:"startTime,omitempty"`
}
