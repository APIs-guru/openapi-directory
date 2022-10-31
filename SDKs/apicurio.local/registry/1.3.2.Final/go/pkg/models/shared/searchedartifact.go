package shared

import (
"time")

type SearchedArtifact struct {
    CreatedBy string `json:"createdBy"`
    CreatedOn time.Time `json:"createdOn"`
    Description *string `json:"description,omitempty"`
    ID string `json:"id"`
    Labels []string `json:"labels,omitempty"`
    ModifiedBy *string `json:"modifiedBy,omitempty"`
    ModifiedOn *time.Time `json:"modifiedOn,omitempty"`
    Name *string `json:"name,omitempty"`
    State ArtifactStateEnum `json:"state"`
    Type ArtifactTypeEnum `json:"type"`
    
}

