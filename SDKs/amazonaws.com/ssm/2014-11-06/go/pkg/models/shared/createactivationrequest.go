package shared

import (
"time")

type CreateActivationRequest struct {
    DefaultInstanceName *string `json:"DefaultInstanceName,omitempty"`
    Description *string `json:"Description,omitempty"`
    ExpirationDate *time.Time `json:"ExpirationDate,omitempty"`
    IamRole string `json:"IamRole"`
    RegistrationLimit *int64 `json:"RegistrationLimit,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

