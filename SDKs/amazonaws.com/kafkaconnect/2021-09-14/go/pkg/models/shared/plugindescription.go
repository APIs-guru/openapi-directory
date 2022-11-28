package shared

// PluginDescription
// The description of the plugin.
type PluginDescription struct {
	CustomPlugin *CustomPluginDescription `json:"customPlugin,omitempty"`
}
