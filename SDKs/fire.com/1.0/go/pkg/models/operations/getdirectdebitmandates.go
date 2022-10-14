package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum string

const (
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumAccountDoesNotAcceptDirectDebits     GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumDdic                                 GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "DDIC"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumAccountNotFound                      GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "ACCOUNT_NOT_FOUND"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumAccountNotLive                       GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "ACCOUNT_NOT_LIVE"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumCustomerNotFound                     GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "CUSTOMER_NOT_FOUND"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumBusinessNotLive                      GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "BUSINESS_NOT_LIVE"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumBusinessNotFull                      GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "BUSINESS_NOT_FULL"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumPersonalUserNotLive                  GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "PERSONAL_USER_NOT_LIVE"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumPersonalUserNotFull                  GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "PERSONAL_USER_NOT_FULL"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumMandateAlreadyExists                 GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "MANDATE_ALREADY_EXISTS"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumMandateWithDiferentAccount           GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "MANDATE_WITH_DIFERENT_ACCOUNT"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumNullMandateReference                 GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "NULL_MANDATE_REFERENCE"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumInvalidAccountCurrency               GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "INVALID_ACCOUNT_CURRENCY"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumInvalidMandateReference              GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "INVALID_MANDATE_REFERENCE"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumRequestedByCustomerViaSupport        GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "REQUESTED_BY_CUSTOMER_VIA_SUPPORT"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumCustomerAccountClosed                GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "CUSTOMER_ACCOUNT_CLOSED"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumCustomerDeceased                     GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "CUSTOMER_DECEASED"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumAccountTransferred                   GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "ACCOUNT_TRANSFERRED"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumMandateNotFound                      GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "MANDATE_NOT_FOUND"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumAccountTransferredToDifferentAccount GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumInvalidAccountType                   GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "INVALID_ACCOUNT_TYPE"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumMandateExpired                       GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "MANDATE_EXPIRED"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumMandateCancelled                     GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "MANDATE_CANCELLED"
	GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnumRequestedByCustomer                  GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum = "REQUESTED_BY_CUSTOMER"
)

type GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum string

const (
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumCreated                GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "CREATED"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumLive                   GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "LIVE"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumRejectRequested        GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "REJECT_REQUESTED"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumRejectRecordInProgress GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "REJECT_RECORD_IN_PROGRESS"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumRejectRecorded         GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "REJECT_RECORDED"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumRejectFileCreated      GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "REJECT_FILE_CREATED"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumRejectFileSent         GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "REJECT_FILE_SENT"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumCancelRequested        GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "CANCEL_REQUESTED"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumCancelRecordInProgress GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "CANCEL_RECORD_IN_PROGRESS"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumCancelRecorded         GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "CANCEL_RECORDED"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumCancelFileCreated      GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "CANCEL_FILE_CREATED"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumCancelFileSent         GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "CANCEL_FILE_SENT"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumComplete               GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "COMPLETE"
	GetDirectDebitMandates200ApplicationJSONMandatesStatusEnumDormant                GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum = "DORMANT"
)

type GetDirectDebitMandates200ApplicationJSONMandatesMandate struct {
	Alias                        *string                                                                                                  `json:"alias,omitempty"`
	Currency                     *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency,omitempty"`
	DateCancelled                *time.Time                                                                                               `json:"dateCancelled,omitempty"`
	DateCompleted                *time.Time                                                                                               `json:"dateCompleted,omitempty"`
	DateCreated                  *time.Time                                                                                               `json:"dateCreated,omitempty"`
	FireRejectionReason          *GetDirectDebitMandates200ApplicationJSONMandatesFireRejectionReasonEnum                                 `json:"fireRejectionReason,omitempty"`
	LastUpdated                  *time.Time                                                                                               `json:"lastUpdated,omitempty"`
	LatestDirectDebitAmount      *int64                                                                                                   `json:"latestDirectDebitAmount,omitempty"`
	LatestDirectDebitDate        *time.Time                                                                                               `json:"latestDirectDebitDate,omitempty"`
	MandateReference             *string                                                                                                  `json:"mandateReference,omitempty"`
	MandateUUID                  *string                                                                                                  `json:"mandateUuid,omitempty"`
	NumberOfDirectDebitCollected *int64                                                                                                   `json:"numberOfDirectDebitCollected,omitempty"`
	OriginatorAlias              *string                                                                                                  `json:"originatorAlias,omitempty"`
	OriginatorLogoURLLarge       *string                                                                                                  `json:"originatorLogoUrlLarge,omitempty"`
	OriginatorLogoURLSmall       *string                                                                                                  `json:"originatorLogoUrlSmall,omitempty"`
	OriginatorName               *string                                                                                                  `json:"originatorName,omitempty"`
	OriginatorReference          *string                                                                                                  `json:"originatorReference,omitempty"`
	SchemeCancelReason           *string                                                                                                  `json:"schemeCancelReason,omitempty"`
	SchemeCancelReasonCode       *string                                                                                                  `json:"schemeCancelReasonCode,omitempty"`
	Status                       *GetDirectDebitMandates200ApplicationJSONMandatesStatusEnum                                              `json:"status,omitempty"`
	TargetIcan                   *int64                                                                                                   `json:"targetIcan,omitempty"`
	ValueOfDirectDebitCollected  *int64                                                                                                   `json:"valueOfDirectDebitCollected,omitempty"`
}

type GetDirectDebitMandates200ApplicationJSONMandates struct {
	Mandates []GetDirectDebitMandates200ApplicationJSONMandatesMandate `json:"mandates,omitempty"`
	Total    *int64                                                    `json:"total,omitempty"`
}

type GetDirectDebitMandatesResponse struct {
	ContentType string
	Mandates    *GetDirectDebitMandates200ApplicationJSONMandates
	StatusCode  int64
}
