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
	AccountHolderName *string                                                                                                  `json:"accountHolderName"`
	AccountName       *string                                                                                                  `json:"accountName"`
	AccountNumber     *string                                                                                                  `json:"accountNumber"`
	Bic               *string                                                                                                  `json:"bic"`
	CreatedBy         *GetPayees200ApplicationJSONCreatedByEnum                                                                `json:"createdBy"`
	Currency          *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency"`
	DateCreated       *time.Time                                                                                               `json:"dateCreated"`
	Iban              *string                                                                                                  `json:"iban"`
	ID                *int64                                                                                                   `json:"id"`
	Nsc               *string                                                                                                  `json:"nsc"`
	Status            *GetPayees200ApplicationJSONStatusEnum                                                                   `json:"status"`
}

type GetPayeesResponse struct {
	ContentType string
	Payee       *GetPayees200ApplicationJSONPayee
	StatusCode  int64
}
