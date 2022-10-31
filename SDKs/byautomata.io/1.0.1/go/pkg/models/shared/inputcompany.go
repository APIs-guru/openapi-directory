package shared

type InputCompany struct {
	CompanyName *string `json:"companyName,omitempty"`
	Country     *string `json:"country,omitempty"`
	Employee    *string `json:"employee,omitempty"`
	Industry    *string `json:"industry,omitempty"`
	Linkedin    *string `json:"linkedin,omitempty"`
	Twitter     *string `json:"twitter,omitempty"`
	Website     *string `json:"website,omitempty"`
}
