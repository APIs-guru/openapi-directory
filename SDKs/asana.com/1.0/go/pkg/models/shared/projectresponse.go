package shared

import (
	"time"
)

type ProjectResponseColorEnum string

const (
	ProjectResponseColorEnumDarkPink      ProjectResponseColorEnum = "dark-pink"
	ProjectResponseColorEnumDarkGreen     ProjectResponseColorEnum = "dark-green"
	ProjectResponseColorEnumDarkBlue      ProjectResponseColorEnum = "dark-blue"
	ProjectResponseColorEnumDarkRed       ProjectResponseColorEnum = "dark-red"
	ProjectResponseColorEnumDarkTeal      ProjectResponseColorEnum = "dark-teal"
	ProjectResponseColorEnumDarkBrown     ProjectResponseColorEnum = "dark-brown"
	ProjectResponseColorEnumDarkOrange    ProjectResponseColorEnum = "dark-orange"
	ProjectResponseColorEnumDarkPurple    ProjectResponseColorEnum = "dark-purple"
	ProjectResponseColorEnumDarkWarmGray  ProjectResponseColorEnum = "dark-warm-gray"
	ProjectResponseColorEnumLightPink     ProjectResponseColorEnum = "light-pink"
	ProjectResponseColorEnumLightGreen    ProjectResponseColorEnum = "light-green"
	ProjectResponseColorEnumLightBlue     ProjectResponseColorEnum = "light-blue"
	ProjectResponseColorEnumLightRed      ProjectResponseColorEnum = "light-red"
	ProjectResponseColorEnumLightTeal     ProjectResponseColorEnum = "light-teal"
	ProjectResponseColorEnumLightBrown    ProjectResponseColorEnum = "light-brown"
	ProjectResponseColorEnumLightOrange   ProjectResponseColorEnum = "light-orange"
	ProjectResponseColorEnumLightPurple   ProjectResponseColorEnum = "light-purple"
	ProjectResponseColorEnumLightWarmGray ProjectResponseColorEnum = "light-warm-gray"
)

type ProjectResponseCurrentStatusColorEnum string

const (
	ProjectResponseCurrentStatusColorEnumGreen  ProjectResponseCurrentStatusColorEnum = "green"
	ProjectResponseCurrentStatusColorEnumYellow ProjectResponseCurrentStatusColorEnum = "yellow"
	ProjectResponseCurrentStatusColorEnumRed    ProjectResponseCurrentStatusColorEnum = "red"
	ProjectResponseCurrentStatusColorEnumBlue   ProjectResponseCurrentStatusColorEnum = "blue"
)

type ProjectResponseCurrentStatus struct {
	Author       *UserCompact                          `json:"author"`
	Color        ProjectResponseCurrentStatusColorEnum `json:"color"`
	CreatedAt    *time.Time                            `json:"created_at"`
	CreatedBy    *UserCompact                          `json:"created_by"`
	Gid          *string                               `json:"gid"`
	HTMLText     *string                               `json:"html_text"`
	ModifiedAt   *time.Time                            `json:"modified_at"`
	ResourceType *string                               `json:"resource_type"`
	Text         string                                `json:"text"`
	Title        *string                               `json:"title"`
}

type ProjectResponseDefaultViewEnum string

const (
	ProjectResponseDefaultViewEnumList     ProjectResponseDefaultViewEnum = "list"
	ProjectResponseDefaultViewEnumBoard    ProjectResponseDefaultViewEnum = "board"
	ProjectResponseDefaultViewEnumCalendar ProjectResponseDefaultViewEnum = "calendar"
	ProjectResponseDefaultViewEnumTimeline ProjectResponseDefaultViewEnum = "timeline"
)

type ProjectResponseIconEnum string

const (
	ProjectResponseIconEnumList           ProjectResponseIconEnum = "list"
	ProjectResponseIconEnumBoard          ProjectResponseIconEnum = "board"
	ProjectResponseIconEnumTimeline       ProjectResponseIconEnum = "timeline"
	ProjectResponseIconEnumCalendar       ProjectResponseIconEnum = "calendar"
	ProjectResponseIconEnumRocket         ProjectResponseIconEnum = "rocket"
	ProjectResponseIconEnumPeople         ProjectResponseIconEnum = "people"
	ProjectResponseIconEnumGraph          ProjectResponseIconEnum = "graph"
	ProjectResponseIconEnumStar           ProjectResponseIconEnum = "star"
	ProjectResponseIconEnumBug            ProjectResponseIconEnum = "bug"
	ProjectResponseIconEnumLightBulb      ProjectResponseIconEnum = "light_bulb"
	ProjectResponseIconEnumGlobe          ProjectResponseIconEnum = "globe"
	ProjectResponseIconEnumGear           ProjectResponseIconEnum = "gear"
	ProjectResponseIconEnumNotebook       ProjectResponseIconEnum = "notebook"
	ProjectResponseIconEnumComputer       ProjectResponseIconEnum = "computer"
	ProjectResponseIconEnumCheck          ProjectResponseIconEnum = "check"
	ProjectResponseIconEnumTarget         ProjectResponseIconEnum = "target"
	ProjectResponseIconEnumHTML           ProjectResponseIconEnum = "html"
	ProjectResponseIconEnumMegaphone      ProjectResponseIconEnum = "megaphone"
	ProjectResponseIconEnumChatBubbles    ProjectResponseIconEnum = "chat_bubbles"
	ProjectResponseIconEnumBriefcase      ProjectResponseIconEnum = "briefcase"
	ProjectResponseIconEnumPageLayout     ProjectResponseIconEnum = "page_layout"
	ProjectResponseIconEnumMountainFlag   ProjectResponseIconEnum = "mountain_flag"
	ProjectResponseIconEnumPuzzle         ProjectResponseIconEnum = "puzzle"
	ProjectResponseIconEnumPresentation   ProjectResponseIconEnum = "presentation"
	ProjectResponseIconEnumLineAndSymbols ProjectResponseIconEnum = "line_and_symbols"
	ProjectResponseIconEnumSpeedDial      ProjectResponseIconEnum = "speed_dial"
	ProjectResponseIconEnumRibbon         ProjectResponseIconEnum = "ribbon"
	ProjectResponseIconEnumShoe           ProjectResponseIconEnum = "shoe"
	ProjectResponseIconEnumShoppingBasket ProjectResponseIconEnum = "shopping_basket"
	ProjectResponseIconEnumMap            ProjectResponseIconEnum = "map"
	ProjectResponseIconEnumTicket         ProjectResponseIconEnum = "ticket"
	ProjectResponseIconEnumCoins          ProjectResponseIconEnum = "coins"
)

type ProjectResponseOwner struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type ProjectResponseTeam struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type ProjectResponseWorkspace struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type ProjectResponse struct {
	Archived            *bool                           `json:"archived"`
	Color               *ProjectResponseColorEnum       `json:"color"`
	CreatedAt           *time.Time                      `json:"created_at"`
	CurrentStatus       *ProjectResponseCurrentStatus   `json:"current_status"`
	CustomFieldSettings []CustomFieldSettingCompact     `json:"custom_field_settings"`
	CustomFields        []CustomFieldCompact            `json:"custom_fields"`
	DefaultView         *ProjectResponseDefaultViewEnum `json:"default_view"`
	DueDate             *time.Time                      `json:"due_date"`
	DueOn               *time.Time                      `json:"due_on"`
	Followers           []UserCompact                   `json:"followers"`
	Gid                 *string                         `json:"gid"`
	HTMLNotes           *string                         `json:"html_notes"`
	Icon                *ProjectResponseIconEnum        `json:"icon"`
	IsTemplate          *bool                           `json:"is_template"`
	Members             []UserCompact                   `json:"members"`
	ModifiedAt          *time.Time                      `json:"modified_at"`
	Name                *string                         `json:"name"`
	Notes               *string                         `json:"notes"`
	Owner               *ProjectResponseOwner           `json:"owner"`
	PermalinkURL        *string                         `json:"permalink_url"`
	Public              *bool                           `json:"public"`
	ResourceType        *string                         `json:"resource_type"`
	StartOn             *time.Time                      `json:"start_on"`
	Team                *ProjectResponseTeam            `json:"team"`
	Workspace           *ProjectResponseWorkspace       `json:"workspace"`
}
