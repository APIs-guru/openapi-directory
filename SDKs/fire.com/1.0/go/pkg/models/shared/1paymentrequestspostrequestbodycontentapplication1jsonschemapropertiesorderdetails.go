package shared

type OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails struct {
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
