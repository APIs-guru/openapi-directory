package shared



type ProjectSectionInsertRequest struct {
    AfterSection *string `json:"after_section,omitempty"`
    BeforeSection *string `json:"before_section,omitempty"`
    Project string `json:"project"`
    Section string `json:"section"`
    
}

