package operations

import (
"time")


type GetListofCardsCardsCardProviderEnum string

const (
    GetListofCardsCardsCardProviderEnumMastercard GetListofCardsCardsCardProviderEnum = "MASTERCARD"
)



type GetListofCardsCardsCardStatusEnum string

const (
    GetListofCardsCardsCardStatusEnumLive GetListofCardsCardsCardStatusEnum = "LIVE"
GetListofCardsCardsCardStatusEnumCreatedActive GetListofCardsCardsCardStatusEnum = "CREATED_ACTIVE"
GetListofCardsCardsCardStatusEnumCreatedInactive GetListofCardsCardsCardStatusEnum = "CREATED_INACTIVE"
GetListofCardsCardsCardStatusEnumDeactivated GetListofCardsCardsCardStatusEnum = "DEACTIVATED"
)



type GetListofCardsCardsCardStatusReasonEnum string

const (
    GetListofCardsCardsCardStatusReasonEnumLostCard GetListofCardsCardsCardStatusReasonEnum = "LOST_CARD"
GetListofCardsCardsCardStatusReasonEnumStolenCard GetListofCardsCardsCardStatusReasonEnum = "STOLEN_CARD"
GetListofCardsCardsCardStatusReasonEnumCardDestroyed GetListofCardsCardsCardStatusReasonEnum = "CARD_DESTROYED"
)


type GetListofCardsCardsCard struct {
    Blocked *bool `json:"blocked,omitempty"`
    CardID *int64 `json:"cardId,omitempty"`
    DateCreated *time.Time `json:"dateCreated,omitempty"`
    EmailAddress *string `json:"emailAddress,omitempty"`
    EurIcan *int64 `json:"eurIcan,omitempty"`
    ExpiryDate *time.Time `json:"expiryDate,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    GbpIcan *int64 `json:"gbpIcan,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    MaskedPan *string `json:"maskedPan,omitempty"`
    Provider *GetListofCardsCardsCardProviderEnum `json:"provider,omitempty"`
    Status *GetListofCardsCardsCardStatusEnum `json:"status,omitempty"`
    StatusReason *GetListofCardsCardsCardStatusReasonEnum `json:"statusReason,omitempty"`
    UserID *int64 `json:"userId,omitempty"`
    
}

type GetListofCardsCards struct {
    Cards []GetListofCardsCardsCard `json:"cards,omitempty"`
    
}

type GetListofCardsResponse struct {
    Cards *GetListofCardsCards 
    ContentType string 
    StatusCode int64 
    
}

