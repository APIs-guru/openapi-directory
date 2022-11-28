package shared

// ParallelDataDataLocation
// The location of the most recent parallel data input file that was successfully imported into Amazon Translate.
type ParallelDataDataLocation struct {
	Location       string `json:"Location"`
	RepositoryType string `json:"RepositoryType"`
}
