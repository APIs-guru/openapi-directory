package shared

import (
	"time"
)

type DescribeArtifactResponse struct {
	ArtifactArn        *string             `json:"ArtifactArn"`
	ArtifactName       *string             `json:"ArtifactName"`
	ArtifactType       *string             `json:"ArtifactType"`
	CreatedBy          *UserContext        `json:"CreatedBy"`
	CreationTime       *time.Time          `json:"CreationTime"`
	LastModifiedBy     *UserContext        `json:"LastModifiedBy"`
	LastModifiedTime   *time.Time          `json:"LastModifiedTime"`
	MetadataProperties *MetadataProperties `json:"MetadataProperties"`
	Properties         map[string]string   `json:"Properties"`
	Source             *ArtifactSource     `json:"Source"`
}
