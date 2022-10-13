package shared

type GetDataSourceInput struct {
	DataSourceID string `json:"DataSourceId"`
	Verbose      *bool  `json:"Verbose"`
}
