package shared

// AccessLevel
// An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
type AccessLevel struct {
	Basic       *BasicLevel  `json:"basic,omitempty"`
	Custom      *CustomLevel `json:"custom,omitempty"`
	Description *string      `json:"description,omitempty"`
	Name        *string      `json:"name,omitempty"`
	Title       *string      `json:"title,omitempty"`
}
