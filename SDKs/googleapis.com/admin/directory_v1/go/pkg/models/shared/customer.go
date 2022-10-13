package shared

import (
	"time"
)

type Customer struct {
	AlternateEmail       *string                `json:"alternateEmail"`
	CustomerCreationTime *time.Time             `json:"customerCreationTime"`
	CustomerDomain       *string                `json:"customerDomain"`
	Etag                 *string                `json:"etag"`
	ID                   *string                `json:"id"`
	Kind                 *string                `json:"kind"`
	Language             *string                `json:"language"`
	PhoneNumber          *string                `json:"phoneNumber"`
	PostalAddress        *CustomerPostalAddress `json:"postalAddress"`
}
