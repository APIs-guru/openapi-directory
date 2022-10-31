package shared

type CreateShipmentFromQuoteRequest struct {
	AdditionalOptions  []AdditionalOption `json:"additionalOptions,omitempty"`
	LabelCustomMessage *string            `json:"labelCustomMessage,omitempty"`
	LabelSize          *string            `json:"labelSize,omitempty"`
	RateID             *string            `json:"rateId,omitempty"`
	ReturnTo           *Contact           `json:"returnTo,omitempty"`
	ShippingQuoteID    *string            `json:"shippingQuoteId,omitempty"`
}
