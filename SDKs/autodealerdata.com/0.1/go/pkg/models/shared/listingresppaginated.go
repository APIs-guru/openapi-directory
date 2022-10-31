package shared



type ListingRespPaginated struct {
    Listings []Listing `json:"listings"`
    MaxPages int64 `json:"maxPages"`
    Page int64 `json:"page"`
    
}

