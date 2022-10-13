package shared

import (
	"time"
)

type ArtifactSummary struct {
	ArtifactArn      *string         `json:"ArtifactArn"`
	ArtifactName     *string         `json:"ArtifactName"`
	ArtifactType     *string         `json:"ArtifactType"`
	CreationTime     *time.Time      `json:"CreationTime"`
	LastModifiedTime *time.Time      `json:"LastModifiedTime"`
	Source           *ArtifactSource `json:"Source"`
}
