package shared

type AuditCategory struct {
	PrimaryCategoryID   *string                 `json:"primary_category_id"`
	PrimaryCategoryName *string                 `json:"primary_category_name"`
	SubCategoryList     []AuditCategoryRelation `json:"sub_category_list"`
}
