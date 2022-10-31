package shared



type AirtravelMultilegRequest struct {
    APIKeyL1 string `json:"apiKey_l1"`
    APIKeyL2 string `json:"apiKey_l2"`
    ContactEmail string `json:"contactEmail"`
    ContactFirstName string `json:"contactFirstName"`
    ContactLastName string `json:"contactLastName"`
    Leg1 Leg1 `json:"leg1"`
    Leg2 Leg1 `json:"leg2"`
    Leg3 Leg1 `json:"leg3"`
    LegsCount string `json:"legs_count"`
    NumberOfPassengers string `json:"number_of_passengers"`
    TravelMode string `json:"travel_mode"`
    
}

