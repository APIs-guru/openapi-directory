package shared

type OverrideButtonConfiguration struct {
	ButtonAction ButtonActionEnum `json:"ButtonAction"`
	Link         *string          `json:"Link,omitempty"`
}
