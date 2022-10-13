package shared

type InputCompany struct {
	CompanyName *string `json:"companyName"`
	Country     *string `json:"country"`
	Employee    *string `json:"employee"`
	Industry    *string `json:"industry"`
	Linkedin    *string `json:"linkedin"`
	Twitter     *string `json:"twitter"`
	Website     *string `json:"website"`
}
