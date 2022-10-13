package shared

import (
	"time"
)

type ProjectStatusResponseColorEnum string

const (
	ProjectStatusResponseColorEnumGreen  ProjectStatusResponseColorEnum = "green"
	ProjectStatusResponseColorEnumYellow ProjectStatusResponseColorEnum = "yellow"
	ProjectStatusResponseColorEnumRed    ProjectStatusResponseColorEnum = "red"
	ProjectStatusResponseColorEnumBlue   ProjectStatusResponseColorEnum = "blue"
)

type ProjectStatusResponse struct {
	Author       *UserCompact                   `json:"author"`
	Color        ProjectStatusResponseColorEnum `json:"color"`
	CreatedAt    *time.Time                     `json:"created_at"`
	CreatedBy    *UserCompact                   `json:"created_by"`
	Gid          *string                        `json:"gid"`
	HTMLText     *string                        `json:"html_text"`
	ModifiedAt   *time.Time                     `json:"modified_at"`
	ResourceType *string                        `json:"resource_type"`
	Text         string                         `json:"text"`
	Title        *string                        `json:"title"`
}
