package shared



type SimilarCompanySearch struct {
    CompanyName *string `json:"companyName,omitempty"`
    Description *string `json:"description,omitempty"`
    Employee *string `json:"employee,omitempty"`
    Industry *string `json:"industry,omitempty"`
    Linkedin *string `json:"linkedin,omitempty"`
    Snippets []Snippet `json:"snippets,omitempty"`
    Title *string `json:"title,omitempty"`
    Twitter *string `json:"twitter,omitempty"`
    Website *string `json:"website,omitempty"`
    
}

