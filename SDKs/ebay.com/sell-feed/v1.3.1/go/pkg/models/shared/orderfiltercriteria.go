package shared



type OrderFilterCriteria struct {
    CreationDateRange *DateRange `json:"creationDateRange,omitempty"`
    ModifiedDateRange *DateRange `json:"modifiedDateRange,omitempty"`
    OrderStatus *string `json:"orderStatus,omitempty"`
    
}

