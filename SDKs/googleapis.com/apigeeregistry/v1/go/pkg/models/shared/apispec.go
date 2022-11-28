package shared

// APISpecInput
// Describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g., in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services.
type APISpecInput struct {
	Annotations map[string]string `json:"annotations,omitempty"`
	Contents    *string           `json:"contents,omitempty"`
	Description *string           `json:"description,omitempty"`
	Filename    *string           `json:"filename,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	MimeType    *string           `json:"mimeType,omitempty"`
	Name        *string           `json:"name,omitempty"`
	SourceURI   *string           `json:"sourceUri,omitempty"`
}

// APISpec
// Describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g., in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services.
type APISpec struct {
	Annotations        map[string]string `json:"annotations,omitempty"`
	Contents           *string           `json:"contents,omitempty"`
	CreateTime         *string           `json:"createTime,omitempty"`
	Description        *string           `json:"description,omitempty"`
	Filename           *string           `json:"filename,omitempty"`
	Hash               *string           `json:"hash,omitempty"`
	Labels             map[string]string `json:"labels,omitempty"`
	MimeType           *string           `json:"mimeType,omitempty"`
	Name               *string           `json:"name,omitempty"`
	RevisionCreateTime *string           `json:"revisionCreateTime,omitempty"`
	RevisionID         *string           `json:"revisionId,omitempty"`
	RevisionUpdateTime *string           `json:"revisionUpdateTime,omitempty"`
	SizeBytes          *int32            `json:"sizeBytes,omitempty"`
	SourceURI          *string           `json:"sourceUri,omitempty"`
}
