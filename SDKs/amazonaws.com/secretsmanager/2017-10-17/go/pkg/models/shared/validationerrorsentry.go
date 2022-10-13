package shared

type ValidationErrorsEntry struct {
	CheckName    *string `json:"CheckName"`
	ErrorMessage *string `json:"ErrorMessage"`
}
