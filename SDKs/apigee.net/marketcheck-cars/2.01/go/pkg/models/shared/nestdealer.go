package shared



type NestDealer struct {
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    DealerType *string `json:"dealer_type,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Latitude *string `json:"latitude,omitempty"`
    Longitude *string `json:"longitude,omitempty"`
    Name *string `json:"name,omitempty"`
    Phone *string `json:"phone,omitempty"`
    SellerEmail *string `json:"seller_email,omitempty"`
    State *string `json:"state,omitempty"`
    Street *string `json:"street,omitempty"`
    Website *string `json:"website,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

