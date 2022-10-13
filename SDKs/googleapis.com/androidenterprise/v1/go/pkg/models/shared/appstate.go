package shared

type AppState struct {
	KeyedAppState []KeyedAppState `json:"keyedAppState"`
	PackageName   *string         `json:"packageName"`
}
