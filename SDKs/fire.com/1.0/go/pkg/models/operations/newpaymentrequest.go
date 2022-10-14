package operations

import (
	"time"
)

type NewPaymentRequestRequestBodyCurrencyEnum string

const (
	NewPaymentRequestRequestBodyCurrencyEnumEur NewPaymentRequestRequestBodyCurrencyEnum = "EUR"
	NewPaymentRequestRequestBodyCurrencyEnumGbp NewPaymentRequestRequestBodyCurrencyEnum = "GBP"
)

type NewPaymentRequestRequestBodyOrderDetailsOrderDetails struct {
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

type NewPaymentRequestRequestBodyTypeEnum string

const (
	NewPaymentRequestRequestBodyTypeEnumOther NewPaymentRequestRequestBodyTypeEnum = "OTHER"
)

type NewPaymentRequestRequestBodyNewPaymentRequest struct {
	AdditionalFields  *string                                               `json:"additionalFields,omitempty"`
	Amount            *int64                                                `json:"amount,omitempty"`
	CollectFields     *string                                               `json:"collectFields,omitempty"`
	Currency          NewPaymentRequestRequestBodyCurrencyEnum              `json:"currency"`
	Description       string                                                `json:"description"`
	Expiry            *time.Time                                            `json:"expiry,omitempty"`
	IcanTo            int64                                                 `json:"icanTo"`
	MandatoryFields   *string                                               `json:"mandatoryFields,omitempty"`
	MaxNumberPayments *int64                                                `json:"maxNumberPayments,omitempty"`
	MyRef             string                                                `json:"myRef"`
	OrderDetails      *NewPaymentRequestRequestBodyOrderDetailsOrderDetails `json:"orderDetails,omitempty"`
	ReturnURL         *string                                               `json:"returnUrl,omitempty"`
	Type              NewPaymentRequestRequestBodyTypeEnum                  `json:"type"`
}

type NewPaymentRequestRequest struct {
	Request NewPaymentRequestRequestBodyNewPaymentRequest `request:"mediaType=application/json"`
}

type NewPaymentRequest200ApplicationJSONTypeEnum string

const (
	NewPaymentRequest200ApplicationJSONTypeEnumOther NewPaymentRequest200ApplicationJSONTypeEnum = "OTHER"
)

type NewPaymentRequest200ApplicationJSONNewPaymentRequestResponse struct {
	Code *string                                      `json:"code,omitempty"`
	Type *NewPaymentRequest200ApplicationJSONTypeEnum `json:"type,omitempty"`
}

type NewPaymentRequestResponse struct {
	ContentType               string
	NewPaymentRequestResponse *NewPaymentRequest200ApplicationJSONNewPaymentRequestResponse
	StatusCode                int64
}
