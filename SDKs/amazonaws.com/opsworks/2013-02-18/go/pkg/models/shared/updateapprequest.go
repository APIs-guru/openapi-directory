package shared

type UpdateAppRequest struct {
	AppID            string                `json:"AppId"`
	AppSource        *Source               `json:"AppSource"`
	Attributes       map[string]string     `json:"Attributes"`
	DataSources      []DataSource          `json:"DataSources"`
	Description      *string               `json:"Description"`
	Domains          []string              `json:"Domains"`
	EnableSsl        *bool                 `json:"EnableSsl"`
	Environment      []EnvironmentVariable `json:"Environment"`
	Name             *string               `json:"Name"`
	SslConfiguration *SslConfiguration     `json:"SslConfiguration"`
	Type             *AppTypeEnum          `json:"Type"`
}
