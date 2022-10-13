package shared

type CreateShipmentFromQuoteRequest struct {
	AdditionalOptions  []AdditionalOption `json:"additionalOptions"`
	LabelCustomMessage *string            `json:"labelCustomMessage"`
	LabelSize          *string            `json:"labelSize"`
	RateID             *string            `json:"rateId"`
	ReturnTo           *Contact           `json:"returnTo"`
	ShippingQuoteID    *string            `json:"shippingQuoteId"`
}
