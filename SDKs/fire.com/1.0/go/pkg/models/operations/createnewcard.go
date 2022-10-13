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
	AcceptFeesAndCharges *bool                                    `json:"acceptFeesAndCharges"`
	AddressType          *CreateNewCardRequestBodyAddressTypeEnum `json:"addressType"`
	CardPin              *string                                  `json:"cardPin"`
	EurIcan              *int64                                   `json:"eurIcan"`
	GbpIcan              *int64                                   `json:"gbpIcan"`
	UserID               *float64                                 `json:"userId"`
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
	CardID     *int64                                     `json:"cardId"`
	ExpiryDate *time.Time                                 `json:"expiryDate"`
	MaskedPan  *string                                    `json:"maskedPan"`
	Status     *CreateNewCard200ApplicationJSONStatusEnum `json:"status"`
}

type CreateNewCardResponse struct {
	ContentType     string
	NewCardResponse *CreateNewCard200ApplicationJSONNewCardResponse
	StatusCode      int64
}
