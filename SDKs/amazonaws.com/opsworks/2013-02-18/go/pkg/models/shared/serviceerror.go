package shared

type ServiceError struct {
	CreatedAt      *string `json:"CreatedAt"`
	InstanceID     *string `json:"InstanceId"`
	Message        *string `json:"Message"`
	ServiceErrorID *string `json:"ServiceErrorId"`
	StackID        *string `json:"StackId"`
	Type           *string `json:"Type"`
}
