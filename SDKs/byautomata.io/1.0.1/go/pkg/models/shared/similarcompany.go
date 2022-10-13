package shared

type SimilarCompany struct {
	CompanyName *string `json:"companyName"`
	Description *string `json:"description"`
	Employee    *string `json:"employee"`
	Industry    *string `json:"industry"`
	Linkedin    *string `json:"linkedin"`
	Title       *string `json:"title"`
	Twitter     *string `json:"twitter"`
	Website     *string `json:"website"`
}
