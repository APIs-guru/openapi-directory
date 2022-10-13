package shared

type InvoiceCategoryUpdateAPIModel struct {
	ID   *int32  `json:"Id" form:"name=Id"`
	Name *string `json:"Name" form:"name=Name"`
}
