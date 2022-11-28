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

type ProjectRequestCurrentStatusInput struct {
	Author    *UserCompactInput                    `json:"author,omitempty"`
	Color     ProjectRequestCurrentStatusColorEnum `json:"color"`
	CreatedBy *UserCompactInput                    `json:"created_by,omitempty"`
	HTMLText  *string                              `json:"html_text,omitempty"`
	Text      string                               `json:"text"`
	Title     *string                              `json:"title,omitempty"`
}

type ProjectRequestDefaultViewEnum string

const (
	ProjectRequestDefaultViewEnumList     ProjectRequestDefaultViewEnum = "list"
	ProjectRequestDefaultViewEnumBoard    ProjectRequestDefaultViewEnum = "board"
	ProjectRequestDefaultViewEnumCalendar ProjectRequestDefaultViewEnum = "calendar"
	ProjectRequestDefaultViewEnumTimeline ProjectRequestDefaultViewEnum = "timeline"
)

type ProjectRequestWorkspaceInput struct {
	Name *string `json:"name,omitempty"`
}

type ProjectRequestInput struct {
	Archived      *bool                             `json:"archived,omitempty"`
	Color         *ProjectRequestColorEnum          `json:"color,omitempty"`
	CurrentStatus *ProjectRequestCurrentStatusInput `json:"current_status,omitempty"`
	CustomFields  map[string]string                 `json:"custom_fields,omitempty"`
	DefaultView   *ProjectRequestDefaultViewEnum    `json:"default_view,omitempty"`
	DueDate       *time.Time                        `json:"due_date,omitempty"`
	DueOn         *time.Time                        `json:"due_on,omitempty"`
	Followers     *string                           `json:"followers,omitempty"`
	HTMLNotes     *string                           `json:"html_notes,omitempty"`
	IsTemplate    *bool                             `json:"is_template,omitempty"`
	Name          *string                           `json:"name,omitempty"`
	Notes         *string                           `json:"notes,omitempty"`
	Owner         *string                           `json:"owner,omitempty"`
	Public        *bool                             `json:"public,omitempty"`
	StartOn       *time.Time                        `json:"start_on,omitempty"`
	Team          *string                           `json:"team,omitempty"`
	Workspace     *ProjectRequestWorkspaceInput     `json:"workspace,omitempty"`
}
