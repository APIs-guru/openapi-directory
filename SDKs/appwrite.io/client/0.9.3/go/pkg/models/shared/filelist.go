package shared

// FileList
// Files List
type FileList struct {
	Files []File `json:"files"`
	Sum   int32  `json:"sum"`
}
