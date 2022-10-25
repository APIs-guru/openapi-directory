package operations

import (
	"time"
)

type CreateNewCardNewCardAddressTypeEnum string

const (
	CreateNewCardNewCardAddressTypeEnumHome     CreateNewCardNewCardAddressTypeEnum = "HOME"
	CreateNewCardNewCardAddressTypeEnumBusiness CreateNewCardNewCardAddressTypeEnum = "BUSINESS"
)

type CreateNewCardNewCard struct {
	AcceptFeesAndCharges *bool                                `json:"acceptFeesAndCharges,omitempty"`
	AddressType          *CreateNewCardNewCardAddressTypeEnum `json:"addressType,omitempty"`
	CardPin              *string                              `json:"cardPin,omitempty"`
	EurIcan              *int64                               `json:"eurIcan,omitempty"`
	GbpIcan              *int64                               `json:"gbpIcan,omitempty"`
	UserID               *float64                             `json:"userId,omitempty"`
}

type CreateNewCardRequest struct {
	Request CreateNewCardNewCard `request:"mediaType=application/json"`
}

type CreateNewCardNewCardResponseStatusEnum string

const (
	CreateNewCardNewCardResponseStatusEnumCreatedActive   CreateNewCardNewCardResponseStatusEnum = "CREATED_ACTIVE"
	CreateNewCardNewCardResponseStatusEnumCreatedInactive CreateNewCardNewCardResponseStatusEnum = "CREATED_INACTIVE"
)

type CreateNewCardNewCardResponse struct {
	CardID     *int64                                  `json:"cardId,omitempty"`
	ExpiryDate *time.Time                              `json:"expiryDate,omitempty"`
	MaskedPan  *string                                 `json:"maskedPan,omitempty"`
	Status     *CreateNewCardNewCardResponseStatusEnum `json:"status,omitempty"`
}

type CreateNewCardResponse struct {
	ContentType     string
	NewCardResponse *CreateNewCardNewCardResponse
	StatusCode      int64
}
