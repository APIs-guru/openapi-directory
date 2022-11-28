package shared

import (
	"time"
)

type EstimationUpdateAPIModelStatusEnum string

const (
	EstimationUpdateAPIModelStatusEnumDraft    EstimationUpdateAPIModelStatusEnum = "Draft"
	EstimationUpdateAPIModelStatusEnumAccepted EstimationUpdateAPIModelStatusEnum = "Accepted"
	EstimationUpdateAPIModelStatusEnumRejected EstimationUpdateAPIModelStatusEnum = "Rejected"
)

type EstimationUpdateAPIModel struct {
	Attachments     []EstimationUpdateAttachmentAPIModel `json:"Attachments,omitempty"`
	ClientID        *int32                               `json:"ClientId,omitempty"`
	ClonedFromID    *int32                               `json:"ClonedFromId,omitempty"`
	CurrencyID      *int32                               `json:"CurrencyId,omitempty"`
	ExpiresOn       *time.Time                           `json:"ExpiresOn,omitempty"`
	ID              *int32                               `json:"Id,omitempty"`
	IssuedOn        *time.Time                           `json:"IssuedOn,omitempty"`
	Items           []EstimationUpdateItemAPIModel       `json:"Items,omitempty"`
	Notes           *string                              `json:"Notes,omitempty"`
	Number          *string                              `json:"Number,omitempty"`
	PaymentGateways []EstimationGatewayAPIModel          `json:"PaymentGateways,omitempty"`
	PoNumber        *string                              `json:"PoNumber,omitempty"`
	Status          *EstimationUpdateAPIModelStatusEnum  `json:"Status,omitempty"`
	Terms           *string                              `json:"Terms,omitempty"`
}
