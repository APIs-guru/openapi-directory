package shared

type StackInstance struct {
	Account             *string                  `json:"Account"`
	Region              *string                  `json:"Region"`
	StackInstanceStatus *StackInstanceStatusEnum `json:"StackInstanceStatus"`
}
