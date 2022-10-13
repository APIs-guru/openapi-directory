package shared

type PurchaseRequest struct {
	ItemID          *string `json:"itemId"`
	OfferID         *string `json:"offerId"`
	PaymentMethodID *string `json:"paymentMethodId"`
	PlanID          *string `json:"planId"`
}
