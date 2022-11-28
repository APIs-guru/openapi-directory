package shared

import (
	"time"
)

type EstimationCreateAPIModelStatusEnum string

const (
	EstimationCreateAPIModelStatusEnumDraft    EstimationCreateAPIModelStatusEnum = "Draft"
	EstimationCreateAPIModelStatusEnumAccepted EstimationCreateAPIModelStatusEnum = "Accepted"
	EstimationCreateAPIModelStatusEnumRejected EstimationCreateAPIModelStatusEnum = "Rejected"
)

type EstimationCreateAPIModel struct {
	Attachments     []EstimationCreateAttachmentAPIModel `json:"Attachments,omitempty"`
	ClientID        *int32                               `json:"ClientId,omitempty"`
	ClonedFromID    *int32                               `json:"ClonedFromId,omitempty"`
	CurrencyID      *int32                               `json:"CurrencyId,omitempty"`
	ExpiresOn       *time.Time                           `json:"ExpiresOn,omitempty"`
	IssuedOn        *time.Time                           `json:"IssuedOn,omitempty"`
	Items           []EstimationCreateItemAPIModel       `json:"Items,omitempty"`
	Notes           *string                              `json:"Notes,omitempty"`
	Number          *string                              `json:"Number,omitempty"`
	PaymentGateways []EstimationGatewayAPIModel          `json:"PaymentGateways,omitempty"`
	PoNumber        *string                              `json:"PoNumber,omitempty"`
	Status          *EstimationCreateAPIModelStatusEnum  `json:"Status,omitempty"`
	Terms           *string                              `json:"Terms,omitempty"`
}
