package shared

type AuditCaseCategoryRelation struct {
	PrimaryCategoryID   *string                `json:"primary_category_id"`
	PrimaryCategoryName *string                `json:"primary_category_name"`
	SubCategoryList     []AuditCaseSubCategory `json:"sub_category_list"`
}
