package shared



type OrderNotes struct {
    LicenseeName *string `json:"licensee_name,omitempty"`
    OrderedBy *string `json:"ordered_by,omitempty"`
    ProjectTitle *string `json:"project_title,omitempty"`
    PurchaseOrderNumber *string `json:"purchase_order_number,omitempty"`
    
}

