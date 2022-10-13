package shared

type DownloadRequirements struct {
	IsNoteRequired        *bool    `json:"is_note_required"`
	IsProjectCodeRequired *bool    `json:"is_project_code_required"`
	ProjectCodes          []string `json:"project_codes"`
}
