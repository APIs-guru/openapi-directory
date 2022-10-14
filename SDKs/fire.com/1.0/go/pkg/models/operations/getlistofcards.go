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
	Blocked      *bool                                                  `json:"blocked,omitempty"`
	CardID       *int64                                                 `json:"cardId,omitempty"`
	DateCreated  *time.Time                                             `json:"dateCreated,omitempty"`
	EmailAddress *string                                                `json:"emailAddress,omitempty"`
	EurIcan      *int64                                                 `json:"eurIcan,omitempty"`
	ExpiryDate   *time.Time                                             `json:"expiryDate,omitempty"`
	FirstName    *string                                                `json:"firstName,omitempty"`
	GbpIcan      *int64                                                 `json:"gbpIcan,omitempty"`
	LastName     *string                                                `json:"lastName,omitempty"`
	MaskedPan    *string                                                `json:"maskedPan,omitempty"`
	Provider     *GetListofCards200ApplicationJSONCardsProviderEnum     `json:"provider,omitempty"`
	Status       *GetListofCards200ApplicationJSONCardsStatusEnum       `json:"status,omitempty"`
	StatusReason *GetListofCards200ApplicationJSONCardsStatusReasonEnum `json:"statusReason,omitempty"`
	UserID       *int64                                                 `json:"userId,omitempty"`
}

type GetListofCards200ApplicationJSONCards struct {
	Cards []GetListofCards200ApplicationJSONCardsCard `json:"cards,omitempty"`
}

type GetListofCardsResponse struct {
	Cards       *GetListofCards200ApplicationJSONCards
	ContentType string
	StatusCode  int64
}
