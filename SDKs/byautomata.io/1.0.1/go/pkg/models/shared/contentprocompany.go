package shared

type ContentProCompany struct {
	CompanyName *string `json:"companyName,omitempty"`
	Description *string `json:"description,omitempty"`
	Employee    *string `json:"employee,omitempty"`
	Industry    *string `json:"industry,omitempty"`
	Linkedin    *string `json:"linkedin,omitempty"`
	Twitter     *string `json:"twitter,omitempty"`
	Website     *string `json:"website,omitempty"`
}
