package shared

type App struct {
	AppID            *string               `json:"AppId"`
	AppSource        *Source               `json:"AppSource"`
	Attributes       map[string]string     `json:"Attributes"`
	CreatedAt        *string               `json:"CreatedAt"`
	DataSources      []DataSource          `json:"DataSources"`
	Description      *string               `json:"Description"`
	Domains          []string              `json:"Domains"`
	EnableSsl        *bool                 `json:"EnableSsl"`
	Environment      []EnvironmentVariable `json:"Environment"`
	Name             *string               `json:"Name"`
	Shortname        *string               `json:"Shortname"`
	SslConfiguration *SslConfiguration     `json:"SslConfiguration"`
	StackID          *string               `json:"StackId"`
	Type             *AppTypeEnum          `json:"Type"`
}
