package shared

import (
	"time"
)

type CreateActivationRequest struct {
	DefaultInstanceName *string    `json:"DefaultInstanceName"`
	Description         *string    `json:"Description"`
	ExpirationDate      *time.Time `json:"ExpirationDate"`
	IamRole             string     `json:"IamRole"`
	RegistrationLimit   *int64     `json:"RegistrationLimit"`
	Tags                []Tag      `json:"Tags"`
}
