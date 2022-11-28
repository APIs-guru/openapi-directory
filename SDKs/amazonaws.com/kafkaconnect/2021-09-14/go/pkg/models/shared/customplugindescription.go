package shared

// CustomPluginDescription
// Details about a custom plugin.
type CustomPluginDescription struct {
	CustomPluginArn *string `json:"customPluginArn,omitempty"`
	Revision        *int64  `json:"revision,omitempty"`
}
