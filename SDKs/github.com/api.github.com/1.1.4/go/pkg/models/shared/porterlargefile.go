package shared

type PorterLargeFile struct {
	Oid     string `json:"oid"`
	Path    string `json:"path"`
	RefName string `json:"ref_name"`
	Size    int64  `json:"size"`
}
