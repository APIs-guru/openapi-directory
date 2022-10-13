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
	Comment1                       *string `json:"comment1"`
	Comment2                       *string `json:"comment2"`
	CustomerNumber                 *string `json:"customerNumber"`
	DeliveryAddressLine1           *string `json:"deliveryAddressLine1"`
	DeliveryAddressLine2           *string `json:"deliveryAddressLine2"`
	DeliveryCity                   *string `json:"deliveryCity"`
	DeliveryCountry                *string `json:"deliveryCountry"`
	DeliveryPostCode               *string `json:"deliveryPostCode"`
	MerchantCustomerIdentification *string `json:"merchantCustomerIdentification"`
	MerchantNumber                 *string `json:"merchantNumber"`
	OrderID                        *string `json:"orderId"`
	ProductID                      *string `json:"productId"`
	VariableReference              *string `json:"variableReference"`
}

type NewPaymentRequestRequestBodyTypeEnum string

const (
	NewPaymentRequestRequestBodyTypeEnumOther NewPaymentRequestRequestBodyTypeEnum = "OTHER"
)

type NewPaymentRequestRequestBodyNewPaymentRequest struct {
	AdditionalFields  *string                                               `json:"additionalFields"`
	Amount            *int64                                                `json:"amount"`
	CollectFields     *string                                               `json:"collectFields"`
	Currency          NewPaymentRequestRequestBodyCurrencyEnum              `json:"currency"`
	Description       string                                                `json:"description"`
	Expiry            *time.Time                                            `json:"expiry"`
	IcanTo            int64                                                 `json:"icanTo"`
	MandatoryFields   *string                                               `json:"mandatoryFields"`
	MaxNumberPayments *int64                                                `json:"maxNumberPayments"`
	MyRef             string                                                `json:"myRef"`
	OrderDetails      *NewPaymentRequestRequestBodyOrderDetailsOrderDetails `json:"orderDetails"`
	ReturnURL         *string                                               `json:"returnUrl"`
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
	Code *string                                      `json:"code"`
	Type *NewPaymentRequest200ApplicationJSONTypeEnum `json:"type"`
}

type NewPaymentRequestResponse struct {
	ContentType               string
	NewPaymentRequestResponse *NewPaymentRequest200ApplicationJSONNewPaymentRequestResponse
	StatusCode                int64
}
