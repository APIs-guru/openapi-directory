package shared

import (
"time")

type ProvisioningArtifact struct {
    CreatedTime *time.Time `json:"CreatedTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    Guidance *ProvisioningArtifactGuidanceEnum `json:"Guidance,omitempty"`
    ID *string `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    
}

