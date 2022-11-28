package shared

// Plugin
// A plugin is an AWS resource that contains the code that defines your connector logic.
type Plugin struct {
	CustomPlugin CustomPlugin `json:"customPlugin"`
}
