package shared

import (
	"time"
)

type EstimationDetailsAPIModelStatusEnum string

const (
	EstimationDetailsAPIModelStatusEnumDraft    EstimationDetailsAPIModelStatusEnum = "Draft"
	EstimationDetailsAPIModelStatusEnumAccepted EstimationDetailsAPIModelStatusEnum = "Accepted"
	EstimationDetailsAPIModelStatusEnumRejected EstimationDetailsAPIModelStatusEnum = "Rejected"
)

type EstimationDetailsAPIModel struct {
	AccessToken    *string                              `json:"AccessToken"`
	Client         *ClientDetailsAPIModel               `json:"Client"`
	ClonedFromID   *int32                               `json:"ClonedFromId"`
	Currency       *CurrencyDetailsAPIModel             `json:"Currency"`
	DiscountAmount *float64                             `json:"DiscountAmount"`
	ExpiresOn      *time.Time                           `json:"ExpiresOn"`
	ID             *int32                               `json:"Id"`
	IssuedOn       *time.Time                           `json:"IssuedOn"`
	Notes          *string                              `json:"Notes"`
	Number         *string                              `json:"Number"`
	PoNumber       *string                              `json:"PoNumber"`
	Status         *EstimationDetailsAPIModelStatusEnum `json:"Status"`
	SubTotalAmount *float64                             `json:"SubTotalAmount"`
	TaxAmount      *float64                             `json:"TaxAmount"`
	Terms          *string                              `json:"Terms"`
	TotalAmount    *float64                             `json:"TotalAmount"`
}
