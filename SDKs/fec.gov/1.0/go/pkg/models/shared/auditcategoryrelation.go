package shared

type AuditCategoryRelation struct {
	SubCategoryID   *string `json:"sub_category_id,omitempty"`
	SubCategoryName *string `json:"sub_category_name,omitempty"`
}
