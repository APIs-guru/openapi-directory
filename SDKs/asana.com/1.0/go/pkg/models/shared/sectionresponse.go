package shared

import (
	"time"
)

type SectionResponse struct {
	CreatedAt    *time.Time       `json:"created_at"`
	Gid          *string          `json:"gid"`
	Name         *string          `json:"name"`
	Project      *ProjectCompact  `json:"project"`
	Projects     []ProjectCompact `json:"projects"`
	ResourceType *string          `json:"resource_type"`
}
