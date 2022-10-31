package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPayeesPayeeCreatedByEnum string

const (
	GetPayeesPayeeCreatedByEnumCustomer        GetPayeesPayeeCreatedByEnum = "CUSTOMER"
	GetPayeesPayeeCreatedByEnumLodgement       GetPayeesPayeeCreatedByEnum = "LODGEMENT"
	GetPayeesPayeeCreatedByEnumDirectDebit     GetPayeesPayeeCreatedByEnum = "DIRECT DEBIT"
	GetPayeesPayeeCreatedByEnumOpenBanking     GetPayeesPayeeCreatedByEnum = "OPEN BANKING"
	GetPayeesPayeeCreatedByEnumFireOpenPayment GetPayeesPayeeCreatedByEnum = "FIRE OPEN PAYMENT"
	GetPayeesPayeeCreatedByEnumFireDirect      GetPayeesPayeeCreatedByEnum = "FIRE DIRECT"
)

type GetPayeesPayeeStatusEnum string

const (
	GetPayeesPayeeStatusEnumCreated  GetPayeesPayeeStatusEnum = "CREATED"
	GetPayeesPayeeStatusEnumLive     GetPayeesPayeeStatusEnum = "LIVE"
	GetPayeesPayeeStatusEnumClosed   GetPayeesPayeeStatusEnum = "CLOSED"
	GetPayeesPayeeStatusEnumArchived GetPayeesPayeeStatusEnum = "ARCHIVED"
)

type GetPayeesPayee struct {
	AccountHolderName *string                                                                                                  `json:"accountHolderName,omitempty"`
	AccountName       *string                                                                                                  `json:"accountName,omitempty"`
	AccountNumber     *string                                                                                                  `json:"accountNumber,omitempty"`
	Bic               *string                                                                                                  `json:"bic,omitempty"`
	CreatedBy         *GetPayeesPayeeCreatedByEnum                                                                             `json:"createdBy,omitempty"`
	Currency          *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency,omitempty"`
	DateCreated       *time.Time                                                                                               `json:"dateCreated,omitempty"`
	Iban              *string                                                                                                  `json:"iban,omitempty"`
	ID                *int64                                                                                                   `json:"id,omitempty"`
	Nsc               *string                                                                                                  `json:"nsc,omitempty"`
	Status            *GetPayeesPayeeStatusEnum                                                                                `json:"status,omitempty"`
}

type GetPayeesResponse struct {
	ContentType string
	Payee       *GetPayeesPayee
	StatusCode  int64
}
