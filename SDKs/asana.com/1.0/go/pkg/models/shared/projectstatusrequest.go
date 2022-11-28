package shared

type ProjectStatusRequestColorEnum string

const (
	ProjectStatusRequestColorEnumGreen  ProjectStatusRequestColorEnum = "green"
	ProjectStatusRequestColorEnumYellow ProjectStatusRequestColorEnum = "yellow"
	ProjectStatusRequestColorEnumRed    ProjectStatusRequestColorEnum = "red"
	ProjectStatusRequestColorEnumBlue   ProjectStatusRequestColorEnum = "blue"
)

type ProjectStatusRequestInput struct {
	Color    ProjectStatusRequestColorEnum `json:"color"`
	HTMLText *string                       `json:"html_text,omitempty"`
	Text     string                        `json:"text"`
	Title    *string                       `json:"title,omitempty"`
}
