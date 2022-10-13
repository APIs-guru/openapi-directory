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
	AdditionalFields   *string                                                                                                  `json:"additionalFields"`
	Amount             *int64                                                                                                   `json:"amount"`
	CollectFields      *string                                                                                                  `json:"collectFields"`
	Currency           *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency"`
	Description        *string                                                                                                  `json:"description"`
	Expiry             *time.Time                                                                                               `json:"expiry"`
	IcanTo             *int64                                                                                                   `json:"icanTo"`
	MandatoryFields    *string                                                                                                  `json:"mandatoryFields"`
	MaxNumberPayments  *int64                                                                                                   `json:"maxNumberPayments"`
	MyRef              *string                                                                                                  `json:"myRef"`
	OrderDetails       *shared.OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails             `json:"orderDetails"`
	PaymentRequestCode *string                                                                                                  `json:"paymentRequestCode"`
	PaymentUUID        *string                                                                                                  `json:"paymentUuid"`
	ReturnURL          *string                                                                                                  `json:"returnUrl"`
	Status             *GetPaymentDetails200ApplicationJSONStatusEnum                                                           `json:"status"`
	TransactionType    *GetPaymentDetails200ApplicationJSONTransactionTypeEnum                                                  `json:"transactionType"`
	Type               *GetPaymentDetails200ApplicationJSONTypeEnum                                                             `json:"type"`
	WebhookURL         *string                                                                                                  `json:"webhookUrl"`
}

type GetPaymentDetailsResponse struct {
	ContentType    string
	PaymentRequest *GetPaymentDetails200ApplicationJSONPaymentRequest
	StatusCode     int64
}
