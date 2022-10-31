package shared

type InvoiceCategoryUpdateAPIModel struct {
	ID   *int32  `json:"Id,omitempty" form:"name=Id"`
	Name *string `json:"Name,omitempty" form:"name=Name"`
}
