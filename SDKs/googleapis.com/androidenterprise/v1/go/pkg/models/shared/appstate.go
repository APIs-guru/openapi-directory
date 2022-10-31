package shared

type AppState struct {
	KeyedAppState []KeyedAppState `json:"keyedAppState,omitempty"`
	PackageName   *string         `json:"packageName,omitempty"`
}
