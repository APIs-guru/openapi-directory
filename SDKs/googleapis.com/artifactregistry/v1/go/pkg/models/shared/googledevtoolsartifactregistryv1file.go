package shared

// GoogleDevtoolsArtifactregistryV1File
// Files store content that is potentially associated with Packages or Versions.
type GoogleDevtoolsArtifactregistryV1File struct {
	CreateTime *string `json:"createTime,omitempty"`
	Hashes     []Hash  `json:"hashes,omitempty"`
	Name       *string `json:"name,omitempty"`
	Owner      *string `json:"owner,omitempty"`
	SizeBytes  *string `json:"sizeBytes,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
