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
	AccessToken    *string                              `json:"AccessToken,omitempty"`
	Client         *ClientDetailsAPIModel               `json:"Client,omitempty"`
	ClonedFromID   *int32                               `json:"ClonedFromId,omitempty"`
	Currency       *CurrencyDetailsAPIModel             `json:"Currency,omitempty"`
	DiscountAmount *float64                             `json:"DiscountAmount,omitempty"`
	ExpiresOn      *time.Time                           `json:"ExpiresOn,omitempty"`
	ID             *int32                               `json:"Id,omitempty"`
	IssuedOn       *time.Time                           `json:"IssuedOn,omitempty"`
	Notes          *string                              `json:"Notes,omitempty"`
	Number         *string                              `json:"Number,omitempty"`
	PoNumber       *string                              `json:"PoNumber,omitempty"`
	Status         *EstimationDetailsAPIModelStatusEnum `json:"Status,omitempty"`
	SubTotalAmount *float64                             `json:"SubTotalAmount,omitempty"`
	TaxAmount      *float64                             `json:"TaxAmount,omitempty"`
	Terms          *string                              `json:"Terms,omitempty"`
	TotalAmount    *float64                             `json:"TotalAmount,omitempty"`
}
