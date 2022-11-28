package shared

// OverrideButtonConfiguration
// Override button configuration.
type OverrideButtonConfiguration struct {
	ButtonAction ButtonActionEnum `json:"ButtonAction"`
	Link         *string          `json:"Link,omitempty"`
}
