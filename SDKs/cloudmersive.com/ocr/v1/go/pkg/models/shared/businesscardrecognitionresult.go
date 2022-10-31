package shared

import (
	"time"
)

type BusinessCardRecognitionResult struct {
	AddressString *string    `json:"AddressString,omitempty"`
	BusinessName  *string    `json:"BusinessName,omitempty"`
	EmailAddress  *string    `json:"EmailAddress,omitempty"`
	PersonName    *string    `json:"PersonName,omitempty"`
	PersonTitle   *string    `json:"PersonTitle,omitempty"`
	PhoneNumber   *string    `json:"PhoneNumber,omitempty"`
	Successful    *bool      `json:"Successful,omitempty"`
	Timestamp     *time.Time `json:"Timestamp,omitempty"`
}
