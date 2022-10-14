package operations

import (
	"time"
)

type CreateNewCardRequestBodyAddressTypeEnum string

const (
	CreateNewCardRequestBodyAddressTypeEnumHome     CreateNewCardRequestBodyAddressTypeEnum = "HOME"
	CreateNewCardRequestBodyAddressTypeEnumBusiness CreateNewCardRequestBodyAddressTypeEnum = "BUSINESS"
)

type CreateNewCardRequestBodyNewCard struct {
	AcceptFeesAndCharges *bool                                    `json:"acceptFeesAndCharges,omitempty"`
	AddressType          *CreateNewCardRequestBodyAddressTypeEnum `json:"addressType,omitempty"`
	CardPin              *string                                  `json:"cardPin,omitempty"`
	EurIcan              *int64                                   `json:"eurIcan,omitempty"`
	GbpIcan              *int64                                   `json:"gbpIcan,omitempty"`
	UserID               *float64                                 `json:"userId,omitempty"`
}

type CreateNewCardRequest struct {
	Request CreateNewCardRequestBodyNewCard `request:"mediaType=application/json"`
}

type CreateNewCard200ApplicationJSONStatusEnum string

const (
	CreateNewCard200ApplicationJSONStatusEnumCreatedActive   CreateNewCard200ApplicationJSONStatusEnum = "CREATED_ACTIVE"
	CreateNewCard200ApplicationJSONStatusEnumCreatedInactive CreateNewCard200ApplicationJSONStatusEnum = "CREATED_INACTIVE"
)

type CreateNewCard200ApplicationJSONNewCardResponse struct {
	CardID     *int64                                     `json:"cardId,omitempty"`
	ExpiryDate *time.Time                                 `json:"expiryDate,omitempty"`
	MaskedPan  *string                                    `json:"maskedPan,omitempty"`
	Status     *CreateNewCard200ApplicationJSONStatusEnum `json:"status,omitempty"`
}

type CreateNewCardResponse struct {
	ContentType     string
	NewCardResponse *CreateNewCard200ApplicationJSONNewCardResponse
	StatusCode      int64
}
