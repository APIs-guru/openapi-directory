package shared

import (
	"time"
)

// ArtifactSummary
// Lists a summary of the properties of an artifact. An artifact represents a URI addressable object or data. Some examples are a dataset and a model.
type ArtifactSummary struct {
	ArtifactArn      *string         `json:"ArtifactArn,omitempty"`
	ArtifactName     *string         `json:"ArtifactName,omitempty"`
	ArtifactType     *string         `json:"ArtifactType,omitempty"`
	CreationTime     *time.Time      `json:"CreationTime,omitempty"`
	LastModifiedTime *time.Time      `json:"LastModifiedTime,omitempty"`
	Source           *ArtifactSource `json:"Source,omitempty"`
}
