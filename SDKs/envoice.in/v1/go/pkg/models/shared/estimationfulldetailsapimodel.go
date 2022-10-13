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
	AccessToken     *string                                  `json:"AccessToken"`
	Activities      []EstimationActivityAPIModel             `json:"Activities"`
	Attachments     []EstimationAttachmentAPIModel           `json:"Attachments"`
	Client          *ClientDetailsAPIModel                   `json:"Client"`
	ClonedFromID    *int32                                   `json:"ClonedFromId"`
	Currency        *CurrencyDetailsAPIModel                 `json:"Currency"`
	DiscountAmount  *float64                                 `json:"DiscountAmount"`
	ExpiresOn       *time.Time                               `json:"ExpiresOn"`
	ID              *int32                                   `json:"Id"`
	IssuedOn        *time.Time                               `json:"IssuedOn"`
	Items           []EstimationItemAPIModel                 `json:"Items"`
	Notes           *string                                  `json:"Notes"`
	Number          *string                                  `json:"Number"`
	PaymentGateways []EstimationGatewayAPIModel              `json:"PaymentGateways"`
	PoNumber        *string                                  `json:"PoNumber"`
	Status          *EstimationFullDetailsAPIModelStatusEnum `json:"Status"`
	SubTotalAmount  *float64                                 `json:"SubTotalAmount"`
	TaxAmount       *float64                                 `json:"TaxAmount"`
	Terms           *string                                  `json:"Terms"`
	TotalAmount     *float64                                 `json:"TotalAmount"`
}
