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

type GetPaymentDetailsPaymentRequestStatusEnum string

const (
	GetPaymentDetailsPaymentRequestStatusEnumAwaitingAuthorisation      GetPaymentDetailsPaymentRequestStatusEnum = "AWAITING_AUTHORISATION"
	GetPaymentDetailsPaymentRequestStatusEnumAuthorised                 GetPaymentDetailsPaymentRequestStatusEnum = "AUTHORISED"
	GetPaymentDetailsPaymentRequestStatusEnumAwaitingMultiAuthorisation GetPaymentDetailsPaymentRequestStatusEnum = "AWAITING_MULTI_AUTHORISATION"
	GetPaymentDetailsPaymentRequestStatusEnumNotAuthorised              GetPaymentDetailsPaymentRequestStatusEnum = "NOT_AUTHORISED"
	GetPaymentDetailsPaymentRequestStatusEnumPaid                       GetPaymentDetailsPaymentRequestStatusEnum = "PAID"
	GetPaymentDetailsPaymentRequestStatusEnumRejected                   GetPaymentDetailsPaymentRequestStatusEnum = "REJECTED"
	GetPaymentDetailsPaymentRequestStatusEnumAccepted                   GetPaymentDetailsPaymentRequestStatusEnum = "ACCEPTED"
	GetPaymentDetailsPaymentRequestStatusEnumReceived                   GetPaymentDetailsPaymentRequestStatusEnum = "RECEIVED"
)

type GetPaymentDetailsPaymentRequestTransactionTypeEnum string

const (
	GetPaymentDetailsPaymentRequestTransactionTypeEnumRefundRequest GetPaymentDetailsPaymentRequestTransactionTypeEnum = "REFUND_REQUEST"
	GetPaymentDetailsPaymentRequestTransactionTypeEnumPayment       GetPaymentDetailsPaymentRequestTransactionTypeEnum = "PAYMENT"
)

type GetPaymentDetailsPaymentRequestTypeEnum string

const (
	GetPaymentDetailsPaymentRequestTypeEnumOther GetPaymentDetailsPaymentRequestTypeEnum = "OTHER"
)

type GetPaymentDetailsPaymentRequest struct {
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
	Status             *GetPaymentDetailsPaymentRequestStatusEnum                                                               `json:"status,omitempty"`
	TransactionType    *GetPaymentDetailsPaymentRequestTransactionTypeEnum                                                      `json:"transactionType,omitempty"`
	Type               *GetPaymentDetailsPaymentRequestTypeEnum                                                                 `json:"type,omitempty"`
	WebhookURL         *string                                                                                                  `json:"webhookUrl,omitempty"`
}

type GetPaymentDetailsResponse struct {
	ContentType    string
	PaymentRequest *GetPaymentDetailsPaymentRequest
	StatusCode     int64
}
