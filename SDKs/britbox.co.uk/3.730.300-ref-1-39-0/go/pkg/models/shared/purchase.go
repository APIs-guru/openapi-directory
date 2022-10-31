package shared

import (
"time")

type Purchase struct {
    AuthorizationDate *time.Time `json:"authorizationDate,omitempty"`
    CreationDate time.Time `json:"creationDate"`
    Currency string `json:"currency"`
    ID string `json:"id"`
    Item *ItemPurchase `json:"item,omitempty"`
    PaymentMethodID *string `json:"paymentMethodId,omitempty"`
    Plan *PlanPurchase `json:"plan,omitempty"`
    Total float32 `json:"total"`
    
}

