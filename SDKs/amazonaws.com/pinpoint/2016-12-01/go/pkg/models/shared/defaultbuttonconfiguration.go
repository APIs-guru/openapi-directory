package shared

type DefaultButtonConfiguration struct {
	BackgroundColor *string          `json:"BackgroundColor"`
	BorderRadius    *int64           `json:"BorderRadius"`
	ButtonAction    ButtonActionEnum `json:"ButtonAction"`
	Link            *string          `json:"Link"`
	Text            string           `json:"Text"`
	TextColor       *string          `json:"TextColor"`
}
