package shared

// Size
// Message depicting the size of the creative. The units of width and height depend on the type of the targeting.
type Size struct {
	Height *int32 `json:"height,omitempty"`
	Width  *int32 `json:"width,omitempty"`
}
