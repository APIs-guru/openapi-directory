package operations

import (
	"time"
)

type NewPaymentRequestNewPaymentRequestCurrencyEnum string

const (
	NewPaymentRequestNewPaymentRequestCurrencyEnumEur NewPaymentRequestNewPaymentRequestCurrencyEnum = "EUR"
	NewPaymentRequestNewPaymentRequestCurrencyEnumGbp NewPaymentRequestNewPaymentRequestCurrencyEnum = "GBP"
)

type NewPaymentRequestNewPaymentRequestOrderDetails struct {
	Comment1                       *string `json:"comment1,omitempty"`
	Comment2                       *string `json:"comment2,omitempty"`
	CustomerNumber                 *string `json:"customerNumber,omitempty"`
	DeliveryAddressLine1           *string `json:"deliveryAddressLine1,omitempty"`
	DeliveryAddressLine2           *string `json:"deliveryAddressLine2,omitempty"`
	DeliveryCity                   *string `json:"deliveryCity,omitempty"`
	DeliveryCountry                *string `json:"deliveryCountry,omitempty"`
	DeliveryPostCode               *string `json:"deliveryPostCode,omitempty"`
	MerchantCustomerIdentification *string `json:"merchantCustomerIdentification,omitempty"`
	MerchantNumber                 *string `json:"merchantNumber,omitempty"`
	OrderID                        *string `json:"orderId,omitempty"`
	ProductID                      *string `json:"productId,omitempty"`
	VariableReference              *string `json:"variableReference,omitempty"`
}

type NewPaymentRequestNewPaymentRequestTypeEnum string

const (
	NewPaymentRequestNewPaymentRequestTypeEnumOther NewPaymentRequestNewPaymentRequestTypeEnum = "OTHER"
)

type NewPaymentRequestNewPaymentRequest struct {
	AdditionalFields  *string                                         `json:"additionalFields,omitempty"`
	Amount            *int64                                          `json:"amount,omitempty"`
	CollectFields     *string                                         `json:"collectFields,omitempty"`
	Currency          NewPaymentRequestNewPaymentRequestCurrencyEnum  `json:"currency"`
	Description       string                                          `json:"description"`
	Expiry            *time.Time                                      `json:"expiry,omitempty"`
	IcanTo            int64                                           `json:"icanTo"`
	MandatoryFields   *string                                         `json:"mandatoryFields,omitempty"`
	MaxNumberPayments *int64                                          `json:"maxNumberPayments,omitempty"`
	MyRef             string                                          `json:"myRef"`
	OrderDetails      *NewPaymentRequestNewPaymentRequestOrderDetails `json:"orderDetails,omitempty"`
	ReturnURL         *string                                         `json:"returnUrl,omitempty"`
	Type              NewPaymentRequestNewPaymentRequestTypeEnum      `json:"type"`
}

type NewPaymentRequestNewPaymentRequestResponseTypeEnum string

const (
	NewPaymentRequestNewPaymentRequestResponseTypeEnumOther NewPaymentRequestNewPaymentRequestResponseTypeEnum = "OTHER"
)

type NewPaymentRequestNewPaymentRequestResponse struct {
	Code *string                                             `json:"code,omitempty"`
	Type *NewPaymentRequestNewPaymentRequestResponseTypeEnum `json:"type,omitempty"`
}

type NewPaymentRequestRequest struct {
	Request NewPaymentRequestNewPaymentRequest `request:"mediaType=application/json"`
}

type NewPaymentRequestResponse struct {
	ContentType               string
	NewPaymentRequestResponse *NewPaymentRequestNewPaymentRequestResponse
	StatusCode                int64
}
