package shared

type Dimensions struct {
	Dpi    *int32 `json:"dpi,omitempty"`
	Height *int32 `json:"height,omitempty"`
	Width  *int32 `json:"width,omitempty"`
}
