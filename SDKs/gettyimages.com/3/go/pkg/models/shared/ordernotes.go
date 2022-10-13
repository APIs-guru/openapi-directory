package shared

type OrderNotes struct {
	LicenseeName        *string `json:"licensee_name"`
	OrderedBy           *string `json:"ordered_by"`
	ProjectTitle        *string `json:"project_title"`
	PurchaseOrderNumber *string `json:"purchase_order_number"`
}
