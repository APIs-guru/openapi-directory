package shared

import (
"time")

type SectionResponse struct {
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    Project *ProjectCompact `json:"project,omitempty"`
    Projects []ProjectCompact `json:"projects,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

