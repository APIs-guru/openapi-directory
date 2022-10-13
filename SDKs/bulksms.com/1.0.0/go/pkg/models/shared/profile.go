package shared

import (
	"time"
)

type ProfileCommerceAddress struct {
	City       *string  `json:"city"`
	Country    *string  `json:"country"`
	PostalCode *string  `json:"postalCode"`
	Region     *string  `json:"region"`
	Street     []string `json:"street"`
}

type ProfileCommerce struct {
	Address              *ProfileCommerceAddress `json:"address"`
	BankPaymentReference *string                 `json:"bankPaymentReference"`
}

type ProfileCompany struct {
	Name         *string `json:"name"`
	TaxReference *string `json:"taxReference"`
}

type ProfileCredits struct {
	Balance           *float32 `json:"balance"`
	IsTransferAllowed *bool    `json:"isTransferAllowed"`
	Limit             *int32   `json:"limit"`
}

type ProfileOriginAddresses struct {
	Allowed              []string `json:"allowed"`
	IsFullControlAllowed *bool    `json:"isFullControlAllowed"`
}

type ProfileQuota struct {
	Remaining int32 `json:"remaining"`
	Size      int32 `json:"size"`
}

type Profile struct {
	Commerce        *ProfileCommerce        `json:"commerce"`
	Company         *ProfileCompany         `json:"company"`
	Created         time.Time               `json:"created"`
	Credits         ProfileCredits          `json:"credits"`
	ID              string                  `json:"id"`
	OriginAddresses *ProfileOriginAddresses `json:"originAddresses"`
	Quota           ProfileQuota            `json:"quota"`
	Username        string                  `json:"username"`
}
