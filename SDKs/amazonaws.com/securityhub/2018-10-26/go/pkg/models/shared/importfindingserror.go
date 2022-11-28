package shared

// ImportFindingsError
// The list of the findings that cannot be imported. For each finding, the list provides the error.
type ImportFindingsError struct {
	ErrorCode    string `json:"ErrorCode"`
	ErrorMessage string `json:"ErrorMessage"`
	ID           string `json:"Id"`
}
