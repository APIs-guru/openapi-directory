package shared

import (
"time")

type ArtifactSummary struct {
    ArtifactArn *string `json:"ArtifactArn,omitempty"`
    ArtifactName *string `json:"ArtifactName,omitempty"`
    ArtifactType *string `json:"ArtifactType,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    Source *ArtifactSource `json:"Source,omitempty"`
    
}

