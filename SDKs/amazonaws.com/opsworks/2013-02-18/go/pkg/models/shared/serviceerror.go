package shared

// ServiceError
// Describes an AWS OpsWorks Stacks service error.
type ServiceError struct {
	CreatedAt      *string `json:"CreatedAt,omitempty"`
	InstanceID     *string `json:"InstanceId,omitempty"`
	Message        *string `json:"Message,omitempty"`
	ServiceErrorID *string `json:"ServiceErrorId,omitempty"`
	StackID        *string `json:"StackId,omitempty"`
	Type           *string `json:"Type,omitempty"`
}
