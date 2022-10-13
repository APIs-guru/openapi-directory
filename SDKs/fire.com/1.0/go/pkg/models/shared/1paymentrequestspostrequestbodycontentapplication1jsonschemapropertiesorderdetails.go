package shared

type OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails struct {
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
