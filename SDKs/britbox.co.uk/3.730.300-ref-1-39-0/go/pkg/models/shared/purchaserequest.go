package shared



type PurchaseRequest struct {
    ItemID *string `json:"itemId,omitempty"`
    OfferID *string `json:"offerId,omitempty"`
    PaymentMethodID *string `json:"paymentMethodId,omitempty"`
    PlanID *string `json:"planId,omitempty"`
    
}

