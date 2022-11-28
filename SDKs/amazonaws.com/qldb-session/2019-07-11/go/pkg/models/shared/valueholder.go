package shared

// ValueHolder
// A structure that can contain a value in multiple encoding formats.
type ValueHolder struct {
	IonBinary *string `json:"IonBinary,omitempty"`
	IonText   *string `json:"IonText,omitempty"`
}
