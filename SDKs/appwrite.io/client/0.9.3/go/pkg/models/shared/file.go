package shared

// File
// File
type File struct {
	DollarID          string                 `json:"$id"`
	DollarPermissions map[string]interface{} `json:"$permissions"`
	DateCreated       int32                  `json:"dateCreated"`
	MimeType          string                 `json:"mimeType"`
	Name              string                 `json:"name"`
	Signature         string                 `json:"signature"`
	SizeOriginal      int32                  `json:"sizeOriginal"`
}
