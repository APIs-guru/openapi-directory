package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPaymentDetailsPathParams struct {
	PaymentUUID string `pathParam:"style=simple,explode=false,name=paymentUuid"`
}

type GetPaymentDetailsRequest struct {
	PathParams GetPaymentDetailsPathParams
}

type GetPaymentDetails200ApplicationJSONStatusEnum string

const (
	GetPaymentDetails200ApplicationJSONStatusEnumAwaitingAuthorisation      GetPaymentDetails200ApplicationJSONStatusEnum = "AWAITING_AUTHORISATION"
	GetPaymentDetails200ApplicationJSONStatusEnumAuthorised                 GetPaymentDetails200ApplicationJSONStatusEnum = "AUTHORISED"
	GetPaymentDetails200ApplicationJSONStatusEnumAwaitingMultiAuthorisation GetPaymentDetails200ApplicationJSONStatusEnum = "AWAITING_MULTI_AUTHORISATION"
	GetPaymentDetails200ApplicationJSONStatusEnumNotAuthorised              GetPaymentDetails200ApplicationJSONStatusEnum = "NOT_AUTHORISED"
	GetPaymentDetails200ApplicationJSONStatusEnumPaid                       GetPaymentDetails200ApplicationJSONStatusEnum = "PAID"
	GetPaymentDetails200ApplicationJSONStatusEnumRejected                   GetPaymentDetails200ApplicationJSONStatusEnum = "REJECTED"
	GetPaymentDetails200ApplicationJSONStatusEnumAccepted                   GetPaymentDetails200ApplicationJSONStatusEnum = "ACCEPTED"
	GetPaymentDetails200ApplicationJSONStatusEnumReceived                   GetPaymentDetails200ApplicationJSONStatusEnum = "RECEIVED"
)

type GetPaymentDetails200ApplicationJSONTransactionTypeEnum string

const (
	GetPaymentDetails200ApplicationJSONTransactionTypeEnumRefundRequest GetPaymentDetails200ApplicationJSONTransactionTypeEnum = "REFUND_REQUEST"
	GetPaymentDetails200ApplicationJSONTransactionTypeEnumPayment       GetPaymentDetails200ApplicationJSONTransactionTypeEnum = "PAYMENT"
)

type GetPaymentDetails200ApplicationJSONTypeEnum string

const (
	GetPaymentDetails200ApplicationJSONTypeEnumOther GetPaymentDetails200ApplicationJSONTypeEnum = "OTHER"
)

type GetPaymentDetails200ApplicationJSONPaymentRequest struct {
	AdditionalFields   *string                                                                                                  `json:"additionalFields,omitempty"`
	Amount             *int64                                                                                                   `json:"amount,omitempty"`
	CollectFields      *string                                                                                                  `json:"collectFields,omitempty"`
	Currency           *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency,omitempty"`
	Description        *string                                                                                                  `json:"description,omitempty"`
	Expiry             *time.Time                                                                                               `json:"expiry,omitempty"`
	IcanTo             *int64                                                                                                   `json:"icanTo,omitempty"`
	MandatoryFields    *string                                                                                                  `json:"mandatoryFields,omitempty"`
	MaxNumberPayments  *int64                                                                                                   `json:"maxNumberPayments,omitempty"`
	MyRef              *string                                                                                                  `json:"myRef,omitempty"`
	OrderDetails       *shared.OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails             `json:"orderDetails,omitempty"`
	PaymentRequestCode *string                                                                                                  `json:"paymentRequestCode,omitempty"`
	PaymentUUID        *string                                                                                                  `json:"paymentUuid,omitempty"`
	ReturnURL          *string                                                                                                  `json:"returnUrl,omitempty"`
	Status             *GetPaymentDetails200ApplicationJSONStatusEnum                                                           `json:"status,omitempty"`
	TransactionType    *GetPaymentDetails200ApplicationJSONTransactionTypeEnum                                                  `json:"transactionType,omitempty"`
	Type               *GetPaymentDetails200ApplicationJSONTypeEnum                                                             `json:"type,omitempty"`
	WebhookURL         *string                                                                                                  `json:"webhookUrl,omitempty"`
}

type GetPaymentDetailsResponse struct {
	ContentType    string
	PaymentRequest *GetPaymentDetails200ApplicationJSONPaymentRequest
	StatusCode     int64
}
