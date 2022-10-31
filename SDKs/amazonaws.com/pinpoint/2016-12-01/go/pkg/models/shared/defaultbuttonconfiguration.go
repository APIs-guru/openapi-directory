package shared

type DefaultButtonConfiguration struct {
	BackgroundColor *string          `json:"BackgroundColor,omitempty"`
	BorderRadius    *int64           `json:"BorderRadius,omitempty"`
	ButtonAction    ButtonActionEnum `json:"ButtonAction"`
	Link            *string          `json:"Link,omitempty"`
	Text            string           `json:"Text"`
	TextColor       *string          `json:"TextColor,omitempty"`
}
