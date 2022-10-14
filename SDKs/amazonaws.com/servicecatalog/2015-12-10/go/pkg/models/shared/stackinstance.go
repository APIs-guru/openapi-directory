package shared

type StackInstance struct {
	Account             *string                  `json:"Account,omitempty"`
	Region              *string                  `json:"Region,omitempty"`
	StackInstanceStatus *StackInstanceStatusEnum `json:"StackInstanceStatus,omitempty"`
}
