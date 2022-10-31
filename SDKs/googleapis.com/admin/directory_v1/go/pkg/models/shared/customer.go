package shared

import (
	"time"
)

type Customer struct {
	AlternateEmail       *string                `json:"alternateEmail,omitempty"`
	CustomerCreationTime *time.Time             `json:"customerCreationTime,omitempty"`
	CustomerDomain       *string                `json:"customerDomain,omitempty"`
	Etag                 *string                `json:"etag,omitempty"`
	ID                   *string                `json:"id,omitempty"`
	Kind                 *string                `json:"kind,omitempty"`
	Language             *string                `json:"language,omitempty"`
	PhoneNumber          *string                `json:"phoneNumber,omitempty"`
	PostalAddress        *CustomerPostalAddress `json:"postalAddress,omitempty"`
}
