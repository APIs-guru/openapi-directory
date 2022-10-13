package shared

import (
	"time"
)

type BusinessCardRecognitionResult struct {
	AddressString *string    `json:"AddressString"`
	BusinessName  *string    `json:"BusinessName"`
	EmailAddress  *string    `json:"EmailAddress"`
	PersonName    *string    `json:"PersonName"`
	PersonTitle   *string    `json:"PersonTitle"`
	PhoneNumber   *string    `json:"PhoneNumber"`
	Successful    *bool      `json:"Successful"`
	Timestamp     *time.Time `json:"Timestamp"`
}
