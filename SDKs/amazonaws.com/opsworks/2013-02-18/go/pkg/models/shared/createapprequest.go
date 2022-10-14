package shared

type CreateAppRequest struct {
	AppSource        *Source               `json:"AppSource,omitempty"`
	Attributes       map[string]string     `json:"Attributes,omitempty"`
	DataSources      []DataSource          `json:"DataSources,omitempty"`
	Description      *string               `json:"Description,omitempty"`
	Domains          []string              `json:"Domains,omitempty"`
	EnableSsl        *bool                 `json:"EnableSsl,omitempty"`
	Environment      []EnvironmentVariable `json:"Environment,omitempty"`
	Name             string                `json:"Name"`
	Shortname        *string               `json:"Shortname,omitempty"`
	SslConfiguration *SslConfiguration     `json:"SslConfiguration,omitempty"`
	StackID          string                `json:"StackId"`
	Type             AppTypeEnum           `json:"Type"`
}
