package shared



type SearchResults struct {
    Items *ItemList `json:"items,omitempty"`
    Movies *ItemList `json:"movies,omitempty"`
    Other *ItemList `json:"other,omitempty"`
    People []Person `json:"people,omitempty"`
    Term string `json:"term"`
    Total int32 `json:"total"`
    Tv *ItemList `json:"tv,omitempty"`
    
}

