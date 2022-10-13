package shared

type DiffEntry struct {
	Additions        int64   `json:"additions"`
	BlobURL          string  `json:"blob_url"`
	Changes          int64   `json:"changes"`
	ContentsURL      string  `json:"contents_url"`
	Deletions        int64   `json:"deletions"`
	Filename         string  `json:"filename"`
	Patch            *string `json:"patch"`
	PreviousFilename *string `json:"previous_filename"`
	RawURL           string  `json:"raw_url"`
	Sha              string  `json:"sha"`
	Status           string  `json:"status"`
}
