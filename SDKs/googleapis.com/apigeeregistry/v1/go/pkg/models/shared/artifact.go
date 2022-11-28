package shared

// ArtifactInput
// Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.
type ArtifactInput struct {
	Contents *string `json:"contents,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
	Name     *string `json:"name,omitempty"`
}

// Artifact
// Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.
type Artifact struct {
	Contents   *string `json:"contents,omitempty"`
	CreateTime *string `json:"createTime,omitempty"`
	Hash       *string `json:"hash,omitempty"`
	MimeType   *string `json:"mimeType,omitempty"`
	Name       *string `json:"name,omitempty"`
	SizeBytes  *int32  `json:"sizeBytes,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
