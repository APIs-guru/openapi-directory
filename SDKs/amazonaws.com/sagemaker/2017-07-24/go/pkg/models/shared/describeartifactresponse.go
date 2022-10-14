package shared

import (
	"time"
)

type DescribeArtifactResponse struct {
	ArtifactArn        *string             `json:"ArtifactArn,omitempty"`
	ArtifactName       *string             `json:"ArtifactName,omitempty"`
	ArtifactType       *string             `json:"ArtifactType,omitempty"`
	CreatedBy          *UserContext        `json:"CreatedBy,omitempty"`
	CreationTime       *time.Time          `json:"CreationTime,omitempty"`
	LastModifiedBy     *UserContext        `json:"LastModifiedBy,omitempty"`
	LastModifiedTime   *time.Time          `json:"LastModifiedTime,omitempty"`
	MetadataProperties *MetadataProperties `json:"MetadataProperties,omitempty"`
	Properties         map[string]string   `json:"Properties,omitempty"`
	Source             *ArtifactSource     `json:"Source,omitempty"`
}
