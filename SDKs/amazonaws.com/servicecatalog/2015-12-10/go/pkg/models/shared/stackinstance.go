package shared

// StackInstance
// An AWS CloudFormation stack, in a specific account and region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status.
type StackInstance struct {
	Account             *string                  `json:"Account,omitempty"`
	Region              *string                  `json:"Region,omitempty"`
	StackInstanceStatus *StackInstanceStatusEnum `json:"StackInstanceStatus,omitempty"`
}
