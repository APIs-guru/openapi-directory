package shared



type Dealer struct {
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    DataSource *string `json:"data_source,omitempty"`
    Distance *float64 `json:"distance,omitempty"`
    ID *string `json:"id,omitempty"`
    InventoryURL *string `json:"inventory_url,omitempty"`
    Latitude *string `json:"latitude,omitempty"`
    LocationLl *string `json:"location_ll,omitempty"`
    Longitude *string `json:"longitude,omitempty"`
    SellerEmail *string `json:"seller_email,omitempty"`
    SellerName *string `json:"seller_name,omitempty"`
    SellerPhone *string `json:"seller_phone,omitempty"`
    State *string `json:"state,omitempty"`
    Status *string `json:"status,omitempty"`
    Street *string `json:"street,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

