package shared

type ProjectSectionInsertRequest struct {
	AfterSection  *string `json:"after_section"`
	BeforeSection *string `json:"before_section"`
	Project       string  `json:"project"`
	Section       string  `json:"section"`
}
