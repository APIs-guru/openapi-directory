package shared



type PaymentMethod struct {
    Brands []string `json:"brands,omitempty"`
    PaymentMethodType *string `json:"paymentMethodType,omitempty"`
    RecipientAccountReference *RecipientAccountReference `json:"recipientAccountReference,omitempty"`
    
}

