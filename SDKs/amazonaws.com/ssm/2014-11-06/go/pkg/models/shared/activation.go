package shared

import (
"time")

type Activation struct {
    ActivationID *string `json:"ActivationId,omitempty"`
    CreatedDate *time.Time `json:"CreatedDate,omitempty"`
    DefaultInstanceName *string `json:"DefaultInstanceName,omitempty"`
    Description *string `json:"Description,omitempty"`
    ExpirationDate *time.Time `json:"ExpirationDate,omitempty"`
    Expired *bool `json:"Expired,omitempty"`
    IamRole *string `json:"IamRole,omitempty"`
    RegistrationLimit *int64 `json:"RegistrationLimit,omitempty"`
    RegistrationsCount *int64 `json:"RegistrationsCount,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

