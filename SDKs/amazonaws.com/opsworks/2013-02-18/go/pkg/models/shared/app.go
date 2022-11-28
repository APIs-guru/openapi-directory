package shared

// App
// A description of the app.
type App struct {
	AppID            *string               `json:"AppId,omitempty"`
	AppSource        *Source               `json:"AppSource,omitempty"`
	Attributes       map[string]string     `json:"Attributes,omitempty"`
	CreatedAt        *string               `json:"CreatedAt,omitempty"`
	DataSources      []DataSource          `json:"DataSources,omitempty"`
	Description      *string               `json:"Description,omitempty"`
	Domains          []string              `json:"Domains,omitempty"`
	EnableSsl        *bool                 `json:"EnableSsl,omitempty"`
	Environment      []EnvironmentVariable `json:"Environment,omitempty"`
	Name             *string               `json:"Name,omitempty"`
	Shortname        *string               `json:"Shortname,omitempty"`
	SslConfiguration *SslConfiguration     `json:"SslConfiguration,omitempty"`
	StackID          *string               `json:"StackId,omitempty"`
	Type             *AppTypeEnum          `json:"Type,omitempty"`
}
