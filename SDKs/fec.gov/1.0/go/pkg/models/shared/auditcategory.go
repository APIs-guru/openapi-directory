package shared



type AuditCategory struct {
    PrimaryCategoryID *string `json:"primary_category_id,omitempty"`
    PrimaryCategoryName *string `json:"primary_category_name,omitempty"`
    SubCategoryList []AuditCategoryRelation `json:"sub_category_list,omitempty"`
    
}

