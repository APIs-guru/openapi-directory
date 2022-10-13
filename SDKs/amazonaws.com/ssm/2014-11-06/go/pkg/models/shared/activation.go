package shared

import (
	"time"
)

type Activation struct {
	ActivationID        *string    `json:"ActivationId"`
	CreatedDate         *time.Time `json:"CreatedDate"`
	DefaultInstanceName *string    `json:"DefaultInstanceName"`
	Description         *string    `json:"Description"`
	ExpirationDate      *time.Time `json:"ExpirationDate"`
	Expired             *bool      `json:"Expired"`
	IamRole             *string    `json:"IamRole"`
	RegistrationLimit   *int64     `json:"RegistrationLimit"`
	RegistrationsCount  *int64     `json:"RegistrationsCount"`
	Tags                []Tag      `json:"Tags"`
}
