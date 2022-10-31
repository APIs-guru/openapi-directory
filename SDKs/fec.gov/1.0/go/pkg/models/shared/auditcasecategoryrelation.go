package shared



type AuditCaseCategoryRelation struct {
    PrimaryCategoryID *string `json:"primary_category_id,omitempty"`
    PrimaryCategoryName *string `json:"primary_category_name,omitempty"`
    SubCategoryList []AuditCaseSubCategory `json:"sub_category_list,omitempty"`
    
}

