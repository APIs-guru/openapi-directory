package shared



type ListingStructurePolicy struct {
    CategoryID *string `json:"categoryId,omitempty"`
    CategoryTreeID *string `json:"categoryTreeId,omitempty"`
    VariationsSupported *bool `json:"variationsSupported,omitempty"`
    
}

