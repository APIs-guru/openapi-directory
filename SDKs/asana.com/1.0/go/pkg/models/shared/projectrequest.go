package shared

import (
	"time"
)

type ProjectRequestColorEnum string

const (
	ProjectRequestColorEnumDarkPink      ProjectRequestColorEnum = "dark-pink"
	ProjectRequestColorEnumDarkGreen     ProjectRequestColorEnum = "dark-green"
	ProjectRequestColorEnumDarkBlue      ProjectRequestColorEnum = "dark-blue"
	ProjectRequestColorEnumDarkRed       ProjectRequestColorEnum = "dark-red"
	ProjectRequestColorEnumDarkTeal      ProjectRequestColorEnum = "dark-teal"
	ProjectRequestColorEnumDarkBrown     ProjectRequestColorEnum = "dark-brown"
	ProjectRequestColorEnumDarkOrange    ProjectRequestColorEnum = "dark-orange"
	ProjectRequestColorEnumDarkPurple    ProjectRequestColorEnum = "dark-purple"
	ProjectRequestColorEnumDarkWarmGray  ProjectRequestColorEnum = "dark-warm-gray"
	ProjectRequestColorEnumLightPink     ProjectRequestColorEnum = "light-pink"
	ProjectRequestColorEnumLightGreen    ProjectRequestColorEnum = "light-green"
	ProjectRequestColorEnumLightBlue     ProjectRequestColorEnum = "light-blue"
	ProjectRequestColorEnumLightRed      ProjectRequestColorEnum = "light-red"
	ProjectRequestColorEnumLightTeal     ProjectRequestColorEnum = "light-teal"
	ProjectRequestColorEnumLightBrown    ProjectRequestColorEnum = "light-brown"
	ProjectRequestColorEnumLightOrange   ProjectRequestColorEnum = "light-orange"
	ProjectRequestColorEnumLightPurple   ProjectRequestColorEnum = "light-purple"
	ProjectRequestColorEnumLightWarmGray ProjectRequestColorEnum = "light-warm-gray"
)

type ProjectRequestCurrentStatusColorEnum string

const (
	ProjectRequestCurrentStatusColorEnumGreen  ProjectRequestCurrentStatusColorEnum = "green"
	ProjectRequestCurrentStatusColorEnumYellow ProjectRequestCurrentStatusColorEnum = "yellow"
	ProjectRequestCurrentStatusColorEnumRed    ProjectRequestCurrentStatusColorEnum = "red"
	ProjectRequestCurrentStatusColorEnumBlue   ProjectRequestCurrentStatusColorEnum = "blue"
)

type ProjectRequestCurrentStatus struct {
	Author       *UserCompact                         `json:"author,omitempty"`
	Color        ProjectRequestCurrentStatusColorEnum `json:"color"`
	CreatedAt    *time.Time                           `json:"created_at,omitempty"`
	CreatedBy    *UserCompact                         `json:"created_by,omitempty"`
	Gid          *string                              `json:"gid,omitempty"`
	HTMLText     *string                              `json:"html_text,omitempty"`
	ModifiedAt   *time.Time                           `json:"modified_at,omitempty"`
	ResourceType *string                              `json:"resource_type,omitempty"`
	Text         string                               `json:"text"`
	Title        *string                              `json:"title,omitempty"`
}

type ProjectRequestDefaultViewEnum string

const (
	ProjectRequestDefaultViewEnumList     ProjectRequestDefaultViewEnum = "list"
	ProjectRequestDefaultViewEnumBoard    ProjectRequestDefaultViewEnum = "board"
	ProjectRequestDefaultViewEnumCalendar ProjectRequestDefaultViewEnum = "calendar"
	ProjectRequestDefaultViewEnumTimeline ProjectRequestDefaultViewEnum = "timeline"
)

type ProjectRequestWorkspace struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

type ProjectRequest struct {
	Archived            *bool                          `json:"archived,omitempty"`
	Color               *ProjectRequestColorEnum       `json:"color,omitempty"`
	CreatedAt           *time.Time                     `json:"created_at,omitempty"`
	CurrentStatus       *ProjectRequestCurrentStatus   `json:"current_status,omitempty"`
	CustomFieldSettings []CustomFieldSettingCompact    `json:"custom_field_settings,omitempty"`
	CustomFields        map[string]string              `json:"custom_fields,omitempty"`
	DefaultView         *ProjectRequestDefaultViewEnum `json:"default_view,omitempty"`
	DueDate             *time.Time                     `json:"due_date,omitempty"`
	DueOn               *time.Time                     `json:"due_on,omitempty"`
	Followers           *string                        `json:"followers,omitempty"`
	Gid                 *string                        `json:"gid,omitempty"`
	HTMLNotes           *string                        `json:"html_notes,omitempty"`
	IsTemplate          *bool                          `json:"is_template,omitempty"`
	Members             []UserCompact                  `json:"members,omitempty"`
	ModifiedAt          *time.Time                     `json:"modified_at,omitempty"`
	Name                *string                        `json:"name,omitempty"`
	Notes               *string                        `json:"notes,omitempty"`
	Owner               *string                        `json:"owner,omitempty"`
	Public              *bool                          `json:"public,omitempty"`
	ResourceType        *string                        `json:"resource_type,omitempty"`
	StartOn             *time.Time                     `json:"start_on,omitempty"`
	Team                *string                        `json:"team,omitempty"`
	Workspace           *ProjectRequestWorkspace       `json:"workspace,omitempty"`
}
