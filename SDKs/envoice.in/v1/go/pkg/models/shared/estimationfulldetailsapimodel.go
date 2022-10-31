package shared

import (
	"time"
)

type EstimationFullDetailsAPIModelStatusEnum string

const (
	EstimationFullDetailsAPIModelStatusEnumDraft    EstimationFullDetailsAPIModelStatusEnum = "Draft"
	EstimationFullDetailsAPIModelStatusEnumAccepted EstimationFullDetailsAPIModelStatusEnum = "Accepted"
	EstimationFullDetailsAPIModelStatusEnumRejected EstimationFullDetailsAPIModelStatusEnum = "Rejected"
)

type EstimationFullDetailsAPIModel struct {
	AccessToken     *string                                  `json:"AccessToken,omitempty"`
	Activities      []EstimationActivityAPIModel             `json:"Activities,omitempty"`
	Attachments     []EstimationAttachmentAPIModel           `json:"Attachments,omitempty"`
	Client          *ClientDetailsAPIModel                   `json:"Client,omitempty"`
	ClonedFromID    *int32                                   `json:"ClonedFromId,omitempty"`
	Currency        *CurrencyDetailsAPIModel                 `json:"Currency,omitempty"`
	DiscountAmount  *float64                                 `json:"DiscountAmount,omitempty"`
	ExpiresOn       *time.Time                               `json:"ExpiresOn,omitempty"`
	ID              *int32                                   `json:"Id,omitempty"`
	IssuedOn        *time.Time                               `json:"IssuedOn,omitempty"`
	Items           []EstimationItemAPIModel                 `json:"Items,omitempty"`
	Notes           *string                                  `json:"Notes,omitempty"`
	Number          *string                                  `json:"Number,omitempty"`
	PaymentGateways []EstimationGatewayAPIModel              `json:"PaymentGateways,omitempty"`
	PoNumber        *string                                  `json:"PoNumber,omitempty"`
	Status          *EstimationFullDetailsAPIModelStatusEnum `json:"Status,omitempty"`
	SubTotalAmount  *float64                                 `json:"SubTotalAmount,omitempty"`
	TaxAmount       *float64                                 `json:"TaxAmount,omitempty"`
	Terms           *string                                  `json:"Terms,omitempty"`
	TotalAmount     *float64                                 `json:"TotalAmount,omitempty"`
}
