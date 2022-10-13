package shared

type OrderFilterCriteria struct {
	CreationDateRange *DateRange `json:"creationDateRange"`
	ModifiedDateRange *DateRange `json:"modifiedDateRange"`
	OrderStatus       *string    `json:"orderStatus"`
}
