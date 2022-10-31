package shared



type DownloadRequirements struct {
    IsNoteRequired *bool `json:"is_note_required,omitempty"`
    IsProjectCodeRequired *bool `json:"is_project_code_required,omitempty"`
    ProjectCodes []string `json:"project_codes,omitempty"`
    
}

