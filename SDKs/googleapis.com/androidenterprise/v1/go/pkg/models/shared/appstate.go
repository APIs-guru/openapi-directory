package shared

// AppState
// List of states set by the app.
type AppState struct {
	KeyedAppState []KeyedAppState `json:"keyedAppState,omitempty"`
	PackageName   *string         `json:"packageName,omitempty"`
}
