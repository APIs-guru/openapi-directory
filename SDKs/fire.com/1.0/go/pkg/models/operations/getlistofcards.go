package operations

import (
	"time"
)

type GetListofCards200ApplicationJSONCardsProviderEnum string

const (
	GetListofCards200ApplicationJSONCardsProviderEnumMastercard GetListofCards200ApplicationJSONCardsProviderEnum = "MASTERCARD"
)

type GetListofCards200ApplicationJSONCardsStatusEnum string

const (
	GetListofCards200ApplicationJSONCardsStatusEnumLive            GetListofCards200ApplicationJSONCardsStatusEnum = "LIVE"
	GetListofCards200ApplicationJSONCardsStatusEnumCreatedActive   GetListofCards200ApplicationJSONCardsStatusEnum = "CREATED_ACTIVE"
	GetListofCards200ApplicationJSONCardsStatusEnumCreatedInactive GetListofCards200ApplicationJSONCardsStatusEnum = "CREATED_INACTIVE"
	GetListofCards200ApplicationJSONCardsStatusEnumDeactivated     GetListofCards200ApplicationJSONCardsStatusEnum = "DEACTIVATED"
)

type GetListofCards200ApplicationJSONCardsStatusReasonEnum string

const (
	GetListofCards200ApplicationJSONCardsStatusReasonEnumLostCard      GetListofCards200ApplicationJSONCardsStatusReasonEnum = "LOST_CARD"
	GetListofCards200ApplicationJSONCardsStatusReasonEnumStolenCard    GetListofCards200ApplicationJSONCardsStatusReasonEnum = "STOLEN_CARD"
	GetListofCards200ApplicationJSONCardsStatusReasonEnumCardDestroyed GetListofCards200ApplicationJSONCardsStatusReasonEnum = "CARD_DESTROYED"
)

type GetListofCards200ApplicationJSONCardsCard struct {
	Blocked      *bool                                                  `json:"blocked"`
	CardID       *int64                                                 `json:"cardId"`
	DateCreated  *time.Time                                             `json:"dateCreated"`
	EmailAddress *string                                                `json:"emailAddress"`
	EurIcan      *int64                                                 `json:"eurIcan"`
	ExpiryDate   *time.Time                                             `json:"expiryDate"`
	FirstName    *string                                                `json:"firstName"`
	GbpIcan      *int64                                                 `json:"gbpIcan"`
	LastName     *string                                                `json:"lastName"`
	MaskedPan    *string                                                `json:"maskedPan"`
	Provider     *GetListofCards200ApplicationJSONCardsProviderEnum     `json:"provider"`
	Status       *GetListofCards200ApplicationJSONCardsStatusEnum       `json:"status"`
	StatusReason *GetListofCards200ApplicationJSONCardsStatusReasonEnum `json:"statusReason"`
	UserID       *int64                                                 `json:"userId"`
}

type GetListofCards200ApplicationJSONCards struct {
	Cards []GetListofCards200ApplicationJSONCardsCard `json:"cards"`
}

type GetListofCardsResponse struct {
	Cards       *GetListofCards200ApplicationJSONCards
	ContentType string
	StatusCode  int64
}
