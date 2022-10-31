package shared

import (
	"time"
)

type ProfileCommerceAddress struct {
	City       *string  `json:"city,omitempty"`
	Country    *string  `json:"country,omitempty"`
	PostalCode *string  `json:"postalCode,omitempty"`
	Region     *string  `json:"region,omitempty"`
	Street     []string `json:"street,omitempty"`
}

type ProfileCommerce struct {
	Address              *ProfileCommerceAddress `json:"address,omitempty"`
	BankPaymentReference *string                 `json:"bankPaymentReference,omitempty"`
}

type ProfileCompany struct {
	Name         *string `json:"name,omitempty"`
	TaxReference *string `json:"taxReference,omitempty"`
}

type ProfileCredits struct {
	Balance           *float32 `json:"balance,omitempty"`
	IsTransferAllowed *bool    `json:"isTransferAllowed,omitempty"`
	Limit             *int32   `json:"limit,omitempty"`
}

type ProfileOriginAddresses struct {
	Allowed              []string `json:"allowed,omitempty"`
	IsFullControlAllowed *bool    `json:"isFullControlAllowed,omitempty"`
}

type ProfileQuota struct {
	Remaining int32 `json:"remaining"`
	Size      int32 `json:"size"`
}

type Profile struct {
	Commerce        *ProfileCommerce        `json:"commerce,omitempty"`
	Company         *ProfileCompany         `json:"company,omitempty"`
	Created         time.Time               `json:"created"`
	Credits         ProfileCredits          `json:"credits"`
	ID              string                  `json:"id"`
	OriginAddresses *ProfileOriginAddresses `json:"originAddresses,omitempty"`
	Quota           ProfileQuota            `json:"quota"`
	Username        string                  `json:"username"`
}
