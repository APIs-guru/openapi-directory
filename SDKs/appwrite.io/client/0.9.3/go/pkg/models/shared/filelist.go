package shared

type FileList struct {
	Files []File `json:"files"`
	Sum   int32  `json:"sum"`
}
