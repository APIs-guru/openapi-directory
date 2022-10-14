package shared

type UILanguageDetailsAPIModel struct {
	ID        *int32  `json:"Id,omitempty"`
	Name      *string `json:"Name,omitempty"`
	UICulture *string `json:"UiCulture,omitempty"`
}
