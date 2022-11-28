package shared

// CustomPlugin
// A plugin is an AWS resource that contains the code that defines a connector's logic.
type CustomPlugin struct {
	CustomPluginArn string `json:"customPluginArn"`
	Revision        int64  `json:"revision"`
}
