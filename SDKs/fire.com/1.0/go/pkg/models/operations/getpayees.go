package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPayees200ApplicationJSONCreatedByEnum string

const (
	GetPayees200ApplicationJSONCreatedByEnumCustomer        GetPayees200ApplicationJSONCreatedByEnum = "CUSTOMER"
	GetPayees200ApplicationJSONCreatedByEnumLodgement       GetPayees200ApplicationJSONCreatedByEnum = "LODGEMENT"
	GetPayees200ApplicationJSONCreatedByEnumDirectDebit     GetPayees200ApplicationJSONCreatedByEnum = "DIRECT DEBIT"
	GetPayees200ApplicationJSONCreatedByEnumOpenBanking     GetPayees200ApplicationJSONCreatedByEnum = "OPEN BANKING"
	GetPayees200ApplicationJSONCreatedByEnumFireOpenPayment GetPayees200ApplicationJSONCreatedByEnum = "FIRE OPEN PAYMENT"
	GetPayees200ApplicationJSONCreatedByEnumFireDirect      GetPayees200ApplicationJSONCreatedByEnum = "FIRE DIRECT"
)

type GetPayees200ApplicationJSONStatusEnum string

const (
	GetPayees200ApplicationJSONStatusEnumCreated  GetPayees200ApplicationJSONStatusEnum = "CREATED"
	GetPayees200ApplicationJSONStatusEnumLive     GetPayees200ApplicationJSONStatusEnum = "LIVE"
	GetPayees200ApplicationJSONStatusEnumClosed   GetPayees200ApplicationJSONStatusEnum = "CLOSED"
	GetPayees200ApplicationJSONStatusEnumArchived GetPayees200ApplicationJSONStatusEnum = "ARCHIVED"
)

type GetPayees200ApplicationJSONPayee struct {
	AccountHolderName *string                                                                                                  `json:"accountHolderName,omitempty"`
	AccountName       *string                                                                                                  `json:"accountName,omitempty"`
	AccountNumber     *string                                                                                                  `json:"accountNumber,omitempty"`
	Bic               *string                                                                                                  `json:"bic,omitempty"`
	CreatedBy         *GetPayees200ApplicationJSONCreatedByEnum                                                                `json:"createdBy,omitempty"`
	Currency          *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency,omitempty"`
	DateCreated       *time.Time                                                                                               `json:"dateCreated,omitempty"`
	Iban              *string                                                                                                  `json:"iban,omitempty"`
	ID                *int64                                                                                                   `json:"id,omitempty"`
	Nsc               *string                                                                                                  `json:"nsc,omitempty"`
	Status            *GetPayees200ApplicationJSONStatusEnum                                                                   `json:"status,omitempty"`
}

type GetPayeesResponse struct {
	ContentType string
	Payee       *GetPayees200ApplicationJSONPayee
	StatusCode  int64
}
