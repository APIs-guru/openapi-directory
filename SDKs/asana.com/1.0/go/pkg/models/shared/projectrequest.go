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
	Author       *UserCompact                         `json:"author"`
	Color        ProjectRequestCurrentStatusColorEnum `json:"color"`
	CreatedAt    *time.Time                           `json:"created_at"`
	CreatedBy    *UserCompact                         `json:"created_by"`
	Gid          *string                              `json:"gid"`
	HTMLText     *string                              `json:"html_text"`
	ModifiedAt   *time.Time                           `json:"modified_at"`
	ResourceType *string                              `json:"resource_type"`
	Text         string                               `json:"text"`
	Title        *string                              `json:"title"`
}

type ProjectRequestDefaultViewEnum string

const (
	ProjectRequestDefaultViewEnumList     ProjectRequestDefaultViewEnum = "list"
	ProjectRequestDefaultViewEnumBoard    ProjectRequestDefaultViewEnum = "board"
	ProjectRequestDefaultViewEnumCalendar ProjectRequestDefaultViewEnum = "calendar"
	ProjectRequestDefaultViewEnumTimeline ProjectRequestDefaultViewEnum = "timeline"
)

type ProjectRequestWorkspace struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type ProjectRequest struct {
	Archived            *bool                          `json:"archived"`
	Color               *ProjectRequestColorEnum       `json:"color"`
	CreatedAt           *time.Time                     `json:"created_at"`
	CurrentStatus       *ProjectRequestCurrentStatus   `json:"current_status"`
	CustomFieldSettings []CustomFieldSettingCompact    `json:"custom_field_settings"`
	CustomFields        map[string]string              `json:"custom_fields"`
	DefaultView         *ProjectRequestDefaultViewEnum `json:"default_view"`
	DueDate             *time.Time                     `json:"due_date"`
	DueOn               *time.Time                     `json:"due_on"`
	Followers           *string                        `json:"followers"`
	Gid                 *string                        `json:"gid"`
	HTMLNotes           *string                        `json:"html_notes"`
	IsTemplate          *bool                          `json:"is_template"`
	Members             []UserCompact                  `json:"members"`
	ModifiedAt          *time.Time                     `json:"modified_at"`
	Name                *string                        `json:"name"`
	Notes               *string                        `json:"notes"`
	Owner               *string                        `json:"owner"`
	Public              *bool                          `json:"public"`
	ResourceType        *string                        `json:"resource_type"`
	StartOn             *time.Time                     `json:"start_on"`
	Team                *string                        `json:"team"`
	Workspace           *ProjectRequestWorkspace       `json:"workspace"`
}
