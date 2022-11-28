package shared

import (
	"time"
)

// Activation
// An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with Amazon Web Services Systems Manager is called a managed instance.
type Activation struct {
	ActivationID        *string    `json:"ActivationId,omitempty"`
	CreatedDate         *time.Time `json:"CreatedDate,omitempty"`
	DefaultInstanceName *string    `json:"DefaultInstanceName,omitempty"`
	Description         *string    `json:"Description,omitempty"`
	ExpirationDate      *time.Time `json:"ExpirationDate,omitempty"`
	Expired             *bool      `json:"Expired,omitempty"`
	IamRole             *string    `json:"IamRole,omitempty"`
	RegistrationLimit   *int64     `json:"RegistrationLimit,omitempty"`
	RegistrationsCount  *int64     `json:"RegistrationsCount,omitempty"`
	Tags                []Tag      `json:"Tags,omitempty"`
}
